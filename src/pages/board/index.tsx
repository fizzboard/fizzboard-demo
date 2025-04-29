import { Box, IconButton } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { useState } from 'react';
import { ScreenContentComponent } from '~/components/screen-content';
import { FullScreenBoard } from './full-screen-board';
import { FizzBoardAppFrame } from '~/components/app-frame/app-frame';
import { APP_BAR_HEIGHT } from '~/components/app-bar/app-bar';
import { FzbBoardId } from '~/zod-types/branded-strings';
import { useParams, useSearchParams } from 'react-router-dom';
import { getColumnLetter } from '~/utils';
import { Inspector } from "tinybase/ui-react-inspector"
import { FizzBoardTbStoreBoardProvider } from '~/tinybase/FizzBoardTbStoreBoardProvider';


export const DemoBoard = () => {
  
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const rows = searchParams.get('rows') ?? 1;
  const columns = searchParams.get('columns') ?? 1;

  const boardId = id as FzbBoardId;
  const rowCount = Number(rows);
  const columnCount = Number(columns);

  const [isFullscreen, setIsFullscreen] = useState(false);
  

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const onFullScreenCanceled = () => {
    setIsFullscreen(false);
  }

  if (isFullscreen) {
    return (
      <FullScreenBoard
        boardId={boardId}
        rowCount={rowCount}
        columnCount={columnCount}
        onFullScreenCanceled={onFullScreenCanceled}
      />
    );
  }
  

  return (
    <FizzBoardTbStoreBoardProvider tbBoardStoreId={boardId}>
      <FizzBoardAppFrame>
        <title>FizzBoard Demo - Board</title>
        <Box
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
        </Box>
        
        <Inspector />
      </FizzBoardAppFrame>
    </FizzBoardTbStoreBoardProvider>
  );
};
