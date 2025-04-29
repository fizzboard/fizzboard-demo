import ReconnectingWebSocket from "reconnecting-websocket";
import { WebSocket } from "ws";
import { Store, createMergeableStore, MergeableStore } from "tinybase";
import { createLocalPersister } from "tinybase/persisters/persister-browser";
import { createWsSynchronizer } from "tinybase/synchronizers/synchronizer-ws-client";
import { FzbBoardId } from "~/zod-types/branded-strings";


export const SERVER_SCHEME = 'wss://';
export const SERVER = 'vite.tinybase.cloud/';


export const FIZZBOARD_SCREEN_GRID_TABLE = 'fzb-screen-grid';
export const POST_DATA_JSON_COLUMN_KEY = 'postDataJson';


export const GRID_LOCATION_SCHEMA = {
  [POST_DATA_JSON_COLUMN_KEY]: {type: 'string'},
}


// export const TB_STORE_TABLES_SCHEMA: TablesSchema = {
//   [FIZZBOARD_SCREEN_GRID_TABLE]: {
//     'A1': GRID_LOCATION_SCHEMA,
//     'A2': GRID_LOCATION_SCHEMA,
//     'A3': GRID_LOCATION_SCHEMA,
//     'A4': GRID_LOCATION_SCHEMA,
//     'B1': GRID_LOCATION_SCHEMA,
//     'B2': GRID_LOCATION_SCHEMA,
//     'B3': GRID_LOCATION_SCHEMA,
//     'B4': GRID_LOCATION_SCHEMA,
//     'C1': GRID_LOCATION_SCHEMA,
//     'C2': GRID_LOCATION_SCHEMA,
//     'C3': GRID_LOCATION_SCHEMA,
//     'C4': GRID_LOCATION_SCHEMA,
//     'D1': GRID_LOCATION_SCHEMA,
//     'D2': GRID_LOCATION_SCHEMA,
//     'D3': GRID_LOCATION_SCHEMA,
//     'D4': GRID_LOCATION_SCHEMA,
//   },
// };


export const createFizzBoardStore = () => {
  return createMergeableStore()
    // .setTablesSchema(TB_STORE_TABLES_SCHEMA);
};


export const createPersisterServerUrl = (boardId: FzbBoardId) => {
  return "local://" + SERVER + boardId;
};

export const createLocalFizzBoardPersister = (store: Store, boardId: FzbBoardId) => {
  const persisterServerUrl = createPersisterServerUrl(boardId);
  return createLocalPersister(store, persisterServerUrl);
};

export const createFizzBoardSynchronizer = async (store: MergeableStore, boardId: FzbBoardId) => {
  const synchronizer = await createWsSynchronizer(
    store,
    new ReconnectingWebSocket(SERVER_SCHEME + SERVER + boardId) as unknown as WebSocket,
    1
  );
  return synchronizer;
};
