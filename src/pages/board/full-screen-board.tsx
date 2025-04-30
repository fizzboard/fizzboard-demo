import { Box } from '@mui/material';
import { ScreenContentComponent } from '~/components/screen-content';
import { useEffect } from 'react';
import { FzbBoardId } from '~/zod-types/branded-strings';
import { FizzBoardTbStoreBoardProvider } from '~/tinybase/FizzBoardTbStoreBoardProvider';


interface FullScreenBoardProps {
  boardId: FzbBoardId;
  rowCount: number;
  columnCount: number;
  onFullScreenCanceled: () => void;
}

export const FullScreenBoard = ({ boardId, rowCount, columnCount, onFullScreenCanceled }: FullScreenBoardProps) => {

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        onFullScreenCanceled();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [onFullScreenCanceled]);

  
  return (
    <FizzBoardTbStoreBoardProvider tbBoardStoreId={boardId}>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
          gridTemplateRows: `repeat(${rowCount}, 1fr)`,
          boxSizing: 'border-box',
          backgroundColor: 'background.default',
        }}
      >
        {Array.from({ length: rowCount }).map((_, rowIndex) => (
          Array.from({ length: columnCount }).map((_, colIndex) => (
            <ScreenContentComponent
              boardId={boardId}
              key={`${rowIndex}-${colIndex}`}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          ))
        ))}
      </Box>
    </FizzBoardTbStoreBoardProvider>
  );
};
