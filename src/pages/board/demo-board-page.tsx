import { useState, useEffect } from 'react';
import { FzbBoardId } from '~/zod-types/branded-strings';
import { useParams, useSearchParams } from 'react-router-dom';
import { Inspector } from "tinybase/ui-react-inspector"
import { FizzBoardTbStoreBoardScreensProvider } from '~/tinybase/FizzBoardTbStoreBoardScreensProvider';
import { BoardComponentWrapper } from '~/components/board-component/board-component-wrapper';
import { BoardLocationSettingId } from '~/zod-types/board-config/board-location-setting';
import { FizzBoardAppBar } from '~/components/app-bar/app-bar';
import { Box } from '@mui/material';
import { APP_BAR_HEIGHT } from '~/components/app-bar/app-bar';
import { FullScreenContainer } from './full-screen-container';


export const DemoBoardPage = () => {
  
  const { id } = useParams();
  const boardId = id as FzbBoardId;

  const [searchParams] = useSearchParams();
  const rows = searchParams.get('rows') ?? 1;
  const columns = searchParams.get('columns') ?? 1;

  const rowCount = Number(rows);
  const columnCount = Number(columns);

  const boardLocationSettingId = (searchParams.get('setting') ?? "bls-other") as BoardLocationSettingId;

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
              boardLocationSettingId={boardLocationSettingId}
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
                boardLocationSettingId={boardLocationSettingId}
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
