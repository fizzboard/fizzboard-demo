import _ from "lodash";
import { useFizzBoardTbStoreData } from "~/tinybase/FizzBoardTbStoreBoardScreensProvider";
import { createScreenIdForRowAndColumn } from "~/utils";
import { BoardComponent } from "./board-component";
import { ScreenPost } from "~/zod-types/screen-post";
import { BoardLocationSettingId } from "~/zod-types/board-config/board-location-setting";


interface BoardComponentWrapperProps {
  rowCount: number;
  columnCount: number;
  boardLocationSettingId: BoardLocationSettingId,

  isFullscreen: boolean;
  onRequestFullscreen: () => void;
}

export const BoardComponentWrapper = ({ 
  rowCount, 
  columnCount,
  boardLocationSettingId,
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
      boardLocationSettingId={boardLocationSettingId}
      isFullscreen={isFullscreen}
      onRequestFullscreen={onRequestFullscreen}
      screenPosts={screenPosts}
    />
  )
}
