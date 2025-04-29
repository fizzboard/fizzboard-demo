import { createContext, useContext, useEffect, useState } from "react";
import { MergeableStore } from "tinybase/mergeable-store";
import { Provider, useCreateMergeableStore, useCreatePersister, useCreateSynchronizer, useRowListener } from "tinybase/ui-react";
import { createFizzBoardStore, createFizzBoardSynchronizer, createLocalFizzBoardPersister, FIZZBOARD_SCREEN_GRID_TABLE, POST_DATA_JSON_COLUMN_KEY } from "./tb-infrastructure";
import { FzbBoardId, FzbScreenSlotId } from "~/zod-types/branded-strings";
import { FzbPostData, FzbPostDataSchema } from "~/zod-types/posts/fzb-post";


export interface IFizzBoardTbStoreData {
  boardId: FzbBoardId;
  gridPostsData: Map<FzbScreenSlotId, FzbPostData>;

  setPostDataJsonForGridLocation: (gridLocation: FzbScreenSlotId, postData: FzbPostData) => void;
}

const FizzBoardTbStoreContext = createContext<IFizzBoardTbStoreData | null>(null);


interface IFizzBoardTbStoreScreensProviderProps {
  children: React.ReactNode;
  tbBoardStoreId: FzbBoardId;
}

export const FizzBoardTbStoreBoardProvider = ({ children, tbBoardStoreId }: IFizzBoardTbStoreScreensProviderProps) => {

  const [gridPostsData, setGridPostsData] = useState<Map<FzbScreenSlotId, FzbPostData>>(new Map());

  const store = useCreateMergeableStore(createFizzBoardStore);

  useCreatePersister(
    store,
    (store) => createLocalFizzBoardPersister(store, tbBoardStoreId),
    [],
    async (persister) => {
      await persister.startAutoLoad([
        {
          [FIZZBOARD_SCREEN_GRID_TABLE]: {
            // "A1": {
            //   "postDataJson": "",
            // },
          },
        },
        { }
      ]);
      console.log("startAutoLoad done");
      
      await persister.startAutoSave();
      console.log("startAutoSave done");
    }
  );

  useCreateSynchronizer(store, async (store: MergeableStore) => {
    const synchronizer = await createFizzBoardSynchronizer(store, tbBoardStoreId);
    await synchronizer.startSync();

    synchronizer.getWebSocket().addEventListener('open', () => {
      synchronizer.load().then(() => synchronizer.save());
    });

    return synchronizer;
  });
  

  const data = store.getTables();
  console.log("DATA", data);

  useRowListener(null, null, 
    (_store, tableId, _rowId) => {
      if (tableId === FIZZBOARD_SCREEN_GRID_TABLE) {
        const newGridPostsData = new Map<FzbScreenSlotId, FzbPostData>();

        const gridLocations = store.getRowIds(tableId);

        gridLocations.forEach(gridLocation => {
          const postDataJson = store.getCell(tableId, gridLocation, POST_DATA_JSON_COLUMN_KEY);
          if (!postDataJson) {
            return;
          }
          
          const rawPostData = JSON.parse(postDataJson as string);
          const postData = FzbPostDataSchema.parse(rawPostData);

          newGridPostsData.set(gridLocation as FzbScreenSlotId, postData);
        });

        setGridPostsData(newGridPostsData);
      }
    },
    [],
    false,
    store
  );

  const setPostDataJsonForGridLocation = (gridLocation: FzbScreenSlotId, postData: FzbPostData) => {
    console.log("setPostDataJsonForGridLocation", gridLocation, postData);
    const postDataJson = JSON.stringify(postData);

    store.setCell(FIZZBOARD_SCREEN_GRID_TABLE, gridLocation, POST_DATA_JSON_COLUMN_KEY, postDataJson);
  };

  
  useEffect(() => {
    const initGridPostsData = () => {
      const gridTable = store.getTable(FIZZBOARD_SCREEN_GRID_TABLE);
      console.log("INIT TABLE");
      console.log(gridTable);
      const gridLocations = store.getRowIds(FIZZBOARD_SCREEN_GRID_TABLE);
      const initialData = new Map<FzbScreenSlotId, FzbPostData>();
  
      gridLocations.forEach(gridLocation => {
        const postDataJson = store.getCell(FIZZBOARD_SCREEN_GRID_TABLE, gridLocation, 'postDataJson');
        if (!postDataJson) {
          return;
        }
  
        const rawPostData = JSON.parse(postDataJson as string);
        const postData = FzbPostDataSchema.parse(rawPostData);
  
        initialData.set(gridLocation as FzbScreenSlotId, postData);
      });
  
      return initialData;
    };

    const initialData = initGridPostsData();
    setGridPostsData(initialData);
  }, [store]);

  console.log("GRID POSTS DATA", gridPostsData);


  const value: IFizzBoardTbStoreData = {
    boardId: tbBoardStoreId,
    gridPostsData,
    setPostDataJsonForGridLocation,
  };
  

  return (
    <FizzBoardTbStoreContext.Provider value={value}>
      <Provider store={store}>
        {children}
      </Provider>
    </FizzBoardTbStoreContext.Provider>
  );
};

export const useFizzBoardTbStoreData = (): IFizzBoardTbStoreData => {

  const context = useContext(FizzBoardTbStoreContext);
  if (!context) {
    throw new Error('useFizzBoardTbStoreData must be used within a FizzBoardTbStoreProvider');
  }
  return context;
};
