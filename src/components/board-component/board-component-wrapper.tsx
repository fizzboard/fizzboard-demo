import _ from "lodash";
import { useFizzBoardTbStoreData } from "~/tinybase/FizzBoardTbStoreBoardScreensProvider";
import { createScreenIdForRowAndColumn } from "~/utils";
import { BoardComponent } from "./board-component";
import { ScreenPost } from "~/zod-types/screen-post";
import { FzbScreenConfigData } from "~/zod-types/screen-config/fzb-screen-config";

interface BoardComponentWrapperProps {
  rowCount: number;
  columnCount: number;
  // boardLocationSettingId: BoardLocationSettingId,

  allScreenSettings: FzbScreenConfigData[],

  isFullscreen: boolean;
  onRequestFullscreen: () => void;
}

export const BoardComponentWrapper = ({ 
  rowCount, 
  columnCount,
  // boardLocationSettingId,
  allScreenSettings,
  isFullscreen,
  onRequestFullscreen,
}: BoardComponentWrapperProps) => {

  const { boardId, gridPostsData } = useFizzBoardTbStoreData();

  const screenIds = _
    .range(rowCount)
    .flatMap(rowIndex => 
      _.range(columnCount)
        .map(colIndex => createScreenIdForRowAndColumn(boardId, rowIndex, colIndex))
    );

  const screenPosts: ScreenPost[] = screenIds.map(screenId => {
    const retVal: ScreenPost = {
      screenId,
      postData: gridPostsData.get(screenId) ?? null,
    }
    return retVal;
  });


  return (
    <BoardComponent
      rowCount={rowCount}
      columnCount={columnCount}
      // boardLocationSettingId={boardLocationSettingId}
      allScreenSettings={allScreenSettings}
      isFullscreen={isFullscreen}
      onRequestFullscreen={onRequestFullscreen}
      screenPosts={screenPosts}
    />
  )
}
