import { useParams } from "react-router-dom";
import { Inspector } from "tinybase/ui-react-inspector";
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame";
import { FizzBoardTbStoreBoardProvider } from "~/tinybase/FizzBoardTbStoreBoardProvider";
import { FzbBoardId } from "~/zod-types/branded-strings";


export const PostToScreenPage = () => {

  const { id } = useParams();
  const boardId = id as FzbBoardId;


  return (
    <FizzBoardTbStoreBoardProvider tbBoardStoreId={boardId}>
      <FizzBoardAppFrame>
        <title>FizzBoard Demo - Post to Screen</title>
        post to screen
        {/* <Box
          sx={{
            width: '100vw',
            height: `calc(100vh - ${APP_BAR_HEIGHT})`,
            display: 'grid',
            gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
            gridTemplateRows: `repeat(${rowCount}, 1fr)`,
            boxSizing: 'border-box',
            backgroundColor: 'background.default',
            position: 'relative',
          }}
        >
          <IconButton
            onClick={toggleFullscreen}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
          
          {Array.from({ length: rowCount }).map((_, rowIndex) => (
            Array.from({ length: columnCount }).map((_, colIndex) => (
              <ScreenContentComponent
                boardId={boardId}
                key={`${rowIndex}-${colIndex}`}
                rowIndex={rowIndex}
                colIndex={colIndex}
                columnLetter={getColumnLetter(colIndex)}
              />
            ))
          ))}
        </Box> */}
        
        <Inspector />
      </FizzBoardAppFrame>
    </FizzBoardTbStoreBoardProvider>
  );
};