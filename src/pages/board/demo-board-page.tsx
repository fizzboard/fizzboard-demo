import { useState, useEffect } from 'react';
import { FzbBoardId } from '~/zod-types/branded-strings';
import { useParams } from 'react-router-dom';
import { Inspector } from "tinybase/ui-react-inspector"
import { FizzBoardTbStoreBoardScreensProvider } from '~/tinybase/FizzBoardTbStoreBoardScreensProvider';
import { BoardComponentWrapper } from '~/components/board-component/board-component-wrapper';
import { FizzBoardAppBar } from '~/components/app-bar/app-bar';
import { Box } from '@mui/material';
import { APP_BAR_HEIGHT } from '~/components/app-bar/app-bar';
import { FullScreenContainer } from './full-screen-container';
import { useDemoUserData } from '~/demo-content/demo-user-context';
import { GRID_DIMENSION_OPTIONS } from '~/zod-types/board-config/grid-dimensions';


export const DemoBoardPage = () => {
  
  const { id } = useParams();
  const boardId = id as FzbBoardId;

  const { boards } = useDemoUserData();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);


  const board = boards.find(b => b.id === boardId);

  if (!board) {
    return <div>Demo Board not found</div>;
  }

  const { gridDimensionsId, allScreenSettings } = board;
  const gridDimensionsOption = GRID_DIMENSION_OPTIONS.find(option => option.id === gridDimensionsId);
  
  if (!gridDimensionsOption) {
    return <div>Grid dimensions not found</div>;
  }
  const { rowCount, columnCount } = gridDimensionsOption;


  const onRequestFullscreen = () => {
    document.documentElement.requestFullscreen();
  }
  

  return (
    <FizzBoardTbStoreBoardScreensProvider tbBoardStoreId={boardId}>
      {
        isFullscreen ? (
          <FullScreenContainer>
            <BoardComponentWrapper
              rowCount={rowCount}
              columnCount={columnCount}
              // boardLocationSettingId={boardLocationSettingId}
              allScreenSettings={allScreenSettings}
              isFullscreen={isFullscreen}
              onRequestFullscreen={onRequestFullscreen}
            />
          </FullScreenContainer>
        ) : (
          <>
            <FizzBoardAppBar />
            <Box 
              sx={{
                width: '100vw',
                paddingTop: `${APP_BAR_HEIGHT}`,
                height: `calc(100vh - ${APP_BAR_HEIGHT})`,
                overflow: 'hidden',
              }}
            >
              <BoardComponentWrapper
                rowCount={rowCount}
                columnCount={columnCount}
                // boardLocationSettingId={boardLocationSettingId}
                allScreenSettings={allScreenSettings}
                isFullscreen={isFullscreen}
                onRequestFullscreen={onRequestFullscreen}
              />
            <Inspector />
          </Box>
        </>
        )
      }        
    </FizzBoardTbStoreBoardScreensProvider>
  );
};
