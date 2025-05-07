import { IconButton } from "@mui/material";
import { Box } from "@mui/material";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { getGridCoordinate } from "~/utils";
import { ScreenContentComponent } from "../screen-content/ScreenContentComponent";
import { ScreenPost } from "~/zod-types/screen-post";
import { createSendPostToScreenUrl } from "~/url-utils";
import { FzbScreenConfigData } from "~/zod-types/screen-config/fzb-screen-config";
// import { BoardLocationSettingId } from "~/zod-types/board-config/board-location-setting";


interface BoardComponentProps {
  rowCount: number;
  columnCount: number;
  // boardLocationSettingId: BoardLocationSettingId;
    
  screenPosts: ScreenPost[];
  allScreenSettings: FzbScreenConfigData[],
  
  isFullscreen: boolean;
  onRequestFullscreen: () => void;
}

export const BoardComponent = ({ 
  rowCount, 
  columnCount,
  // boardLocationSettingId,
    
  screenPosts,
  allScreenSettings,
  isFullscreen,
  onRequestFullscreen,
}: BoardComponentProps) => {

  const showGoFullscreenButton = !isFullscreen;

  const expectedScreenCount = rowCount * columnCount;
  if (screenPosts.length !== expectedScreenCount) {
    throw new Error(`Expected ${expectedScreenCount} screens, but got ${screenPosts.length}`);
  }

  return (
    <>
      <title>FizzBoard Demo - Board</title>
      <Box
        sx={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))`,
        boxSizing: 'border-box',
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
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
            const sendPostToScreenUrl = createSendPostToScreenUrl(screenId);

            const screenSettings = allScreenSettings[screenIndex];
            
            return (
              <ScreenContentComponent
                key={screenId}
                screenId={screenId}
                screenPostData={postData}
                gridCoordinate={gridCoordinate}
                sendPostToScreenUrl={sendPostToScreenUrl}
                screenConfig={screenSettings}
              />
            );
          })
        ))}
      </Box>
    </>
  )
}
