import { createMergeableStore } from "tinybase/mergeable-store";
import { createLocalPersister } from "tinybase/persisters/persister-browser";
import { Store } from "tinybase/store";
import { createWsSynchronizer } from "tinybase/synchronizers/synchronizer-ws-client";
import ReconnectingWebSocket from "reconnecting-websocket";
import { FzbBoardId } from "~/zod-types/branded-strings";


export const SERVER_SCHEME = 'wss://';
export const SERVER = 'vite.tinybase.cloud/';

export const FZB_BOARDS_TB_KEY = 'fzb-boards';


const createFzbBoardStore = () => {
  return createMergeableStore();
    // .setTablesSchema(TB_STORE_TABLES_SCHEMA);
};


const createFzbBoardPersisterServerUrl = (screenSlotId: FzbBoardId) => {
  return "local://" + SERVER + FZB_BOARDS_TB_KEY + '/' + screenSlotId;
};


const createLocalFzbBoardPersister = (store: Store, screenSlotId: FzbBoardId) => {
  const persisterServerUrl = createFzbBoardPersisterServerUrl(screenSlotId);
  return createLocalPersister(store, persisterServerUrl);
};


export const createFzbBoardSynchronizer = async (screenSlotId: FzbBoardId) => {
  const store = createFzbBoardStore();
  const persister = createLocalFzbBoardPersister(store, screenSlotId);
  
  const synchronizer = await createWsSynchronizer(
    store,
    new ReconnectingWebSocket(SERVER_SCHEME + SERVER + FZB_BOARDS_TB_KEY + '/' + screenSlotId) as unknown as WebSocket,
    1
  );
  
  return {
    store,
    persister,
    synchronizer,
  };
};
