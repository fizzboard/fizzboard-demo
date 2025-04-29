import { Box } from '@mui/material';
import { ScreenContentComponent } from '~/components/screen-content';
import { useEffect, useState } from 'react';
import { getColumnLetter } from '~/utils';
import { FzbBoardId } from '~/zod-types/branded-strings';
import { createFzbBoardSynchronizer } from '~/tinybase/tb-boards';
import { Store } from 'tinybase/store';


interface FullScreenBoardProps {
  boardId: FzbBoardId;
  rowCount: number;
  columnCount: number;
  onFullScreenCanceled: () => void;
}

export const FullScreenBoard = ({ boardId, rowCount, columnCount, onFullScreenCanceled }: FullScreenBoardProps) => {

  const [store, setStore] = useState<Store | null>(null);

  useEffect(() => {
    const init = async () => {
      const {store} = await createFzbBoardSynchronizer(boardId);
      setStore(store);
      const values = store.getValues();
      console.log("store values");
      console.log(values);
    };
    init();
  }, [boardId]);

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

  if (!store) {
    return null;
  }
  
  return (
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
            columnLetter={getColumnLetter(colIndex)}
          />
        ))
      ))}
    </Box>
  );
};
