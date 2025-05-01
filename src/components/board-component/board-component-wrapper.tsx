import _ from "lodash";
import { useFizzBoardTbStoreData } from "~/tinybase/FizzBoardTbStoreBoardScreensProvider";
import { createScreenIdForRowAndColumn } from "~/utils";
import { BoardComponent } from "./board-component";
import { ScreenPost } from "~/zod-types/screen-post";


interface BoardComponentWrapperProps {
  rowCount: number;
  columnCount: number;
  isFullscreen: boolean;
  onRequestFullscreen: () => void;
}

export const BoardComponentWrapper = ({ 
  rowCount, 
  columnCount,
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
      isFullscreen={isFullscreen}
      onRequestFullscreen={onRequestFullscreen}
      screenPosts={screenPosts}
    />
  )
}
