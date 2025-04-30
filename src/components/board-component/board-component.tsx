import { IconButton } from "@mui/material";
import { Box } from "@mui/material";
import { APP_BAR_HEIGHT } from "../app-bar/app-bar";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { getGridCoordinate, joinPaths, SERVER_URL } from "~/utils";
import { ScreenContentComponent } from "../screen-content/ScreenContentComponent";
import { ScreenPost } from "~/zod-types/screen-post";


interface BoardComponentProps {
  rowCount: number;
  columnCount: number;
  isFullscreen: boolean;
  
  screenPosts: ScreenPost[];
  
  onRequestFullscreen: () => void;
}

export const BoardComponent = ({ 
  rowCount, 
  columnCount,
  isFullscreen,
  
  screenPosts,
  
  onRequestFullscreen,
}: BoardComponentProps) => {

  const showGoFullscreenButton = !isFullscreen;

  const expectedScreenCount = rowCount * columnCount;
  if (screenPosts.length !== expectedScreenCount) {
    throw new Error(`Expected ${expectedScreenCount} screens, but got ${screenPosts.length}`);
  }

  const boardHeight = isFullscreen ? '100vh' : `calc(100vh - ${APP_BAR_HEIGHT})`;
  
  return (
    <>
      <title>FizzBoard Demo - Board</title>
      <Box
        sx={{
        width: '100vw',
        height: boardHeight,
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        gridTemplateRows: `repeat(${rowCount}, 1fr)`,
        boxSizing: 'border-box',
        backgroundColor: 'background.default',
        position: 'relative',
      }}
      >
        {showGoFullscreenButton && (
          <IconButton
            onClick={() => onRequestFullscreen()}
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
            <FullscreenIcon />
          </IconButton>
        )}
      
        {Array.from({ length: rowCount }).map((_, rowIndex) => (
          Array.from({ length: columnCount }).map((_, colIndex) => {

            const screenIndex = rowIndex * columnCount + colIndex;
            const { screenId, postData } = screenPosts[screenIndex];

            const gridCoordinate = getGridCoordinate(rowIndex, colIndex);

            const sendPostToScreenUrl = joinPaths(SERVER_URL, "/post-to-screen/", screenId);
            
            return (
              <ScreenContentComponent
                key={screenId}
                screenId={screenId}
                screenPostData={postData}
                gridCoordinate={gridCoordinate}
                sendPostToScreenUrl={sendPostToScreenUrl}
              />
            );
          })
        ))}
      </Box>
    </>
  )
}
