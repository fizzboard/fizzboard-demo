import { useFizzBoardTbStoreData } from "~/tinybase/FizzBoardTbStoreBoardScreensProvider";
import { createScreenIdForRowAndColumn } from "~/utils";
import _ from "lodash";
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

  // const showGoFullscreenButton = !isFullscreen;

  const { boardId, gridPostsData } = useFizzBoardTbStoreData();

  // const screenIds = Array
  //   .from({ length: rowCount * columnCount }, (_, index) => createScreenId(boardId, index));

  const screenIds = _
    .range(rowCount)
    .flatMap(rowIndex => 
      _.range(columnCount)
        .map(colIndex => createScreenIdForRowAndColumn(boardId, rowIndex, colIndex))
    );

  // const screenGridPosts = new Map(screenIds.map(screenId => 
  //   [screenId, gridPostsData.get(screenId) ?? null]
  // ));

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
      // screenIds={screenIds}
      // screenGridPosts={screenGridPosts}
      screenPosts={screenPosts}
    />
  )

  // return (
  //   <>
  //     <title>FizzBoard Demo - Board</title>
  //     <Box
  //       sx={{
  //       width: '100vw',
  //       height: `calc(100vh - ${APP_BAR_HEIGHT})`,
  //       display: 'grid',
  //       gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
  //       gridTemplateRows: `repeat(${rowCount}, 1fr)`,
  //       boxSizing: 'border-box',
  //       backgroundColor: 'background.default',
  //       position: 'relative',
  //     }}
  //     >
  //       {showGoFullscreenButton && (
  //         <IconButton
  //           onClick={() => onRequestFullscreen()}
  //           sx={{
  //             position: 'absolute',
  //             top: 16,
  //             right: 16,
  //             zIndex: 1,
  //             backgroundColor: 'rgba(255, 255, 255, 0.8)',
  //             '&:hover': {
  //               backgroundColor: 'rgba(255, 255, 255, 0.9)',
  //             },
  //           }}
  //         >
  //           <FullscreenIcon />
  //         </IconButton>
  //       )}
      
  //     {Array.from({ length: rowCount }).map((_, rowIndex) => (
  //       Array.from({ length: columnCount }).map((_, colIndex) => {

  //         // const gridCoordinate = getGridCoordinate(rowIndex, colIndex);
  //         // const screenId = createScreenId(boardId, gridCoordinate);
  //         // const screenPostData = gridPostsData.get(screenId) ?? null;

  //         return (
  //           <ScreenContentContainer
  //             key={`${rowIndex}-${colIndex}`}
  //             boardId={boardId}
  //             rowIndex={rowIndex}
  //             colIndex={colIndex}
  //             screenPostData={null}
  //           />
  //         );
  //       })
  //       ))}
  //     </Box>
  //   </>
  // )
}