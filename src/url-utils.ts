import { SERVER_URL } from "./utils";
import { joinPaths } from "./utils";
import { FzbBoardId, FzbScreenId } from "./zod-types/branded-strings";
import { BoardLocationSettingId } from "./zod-types/board-config/board-location-setting";


export const BOARD_URL_PARAMS_ROW_COUNT = "rows";
export const BOARD_URL_PARAMS_COLUMN_COUNT = "columns";
export const BOARD_URL_PARAMS_BOARD_LOCATION_SETTING_ID = "settingId";


export const createBoardUrl = (
  boardId: FzbBoardId,
  rowCount: number,
  columnCount: number,
  boardLocationSettingId: BoardLocationSettingId
) => {

  const boardUrl = joinPaths(SERVER_URL, "/boards/", boardId);
  const boardUrlWithParams = boardUrl + "?" + 
    BOARD_URL_PARAMS_ROW_COUNT + "=" + rowCount + "&" +
    BOARD_URL_PARAMS_COLUMN_COUNT + "=" + columnCount + "&" +
    BOARD_URL_PARAMS_BOARD_LOCATION_SETTING_ID + "=" + boardLocationSettingId;
  return boardUrlWithParams;
}

export const createSendPostToScreenUrl = (screenId: FzbScreenId, boardLocationSettingId: BoardLocationSettingId) => {
  const sendPostToScreenPath = joinPaths(SERVER_URL, "/post-to-screen/", screenId);
  
  const sendPostToScreenUrl = boardLocationSettingId ? 
    sendPostToScreenPath + "?" + BOARD_URL_PARAMS_BOARD_LOCATION_SETTING_ID + "=" + boardLocationSettingId :
    sendPostToScreenPath;

  return sendPostToScreenUrl;
}
