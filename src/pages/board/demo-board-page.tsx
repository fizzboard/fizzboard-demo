import { useState, useEffect } from 'react';
import { FizzBoardAppFrame } from '~/components/app-frame/app-frame';
import { FzbBoardId } from '~/zod-types/branded-strings';
import { useParams, useSearchParams } from 'react-router-dom';
import { Inspector } from "tinybase/ui-react-inspector"
import { FizzBoardTbStoreBoardScreensProvider } from '~/tinybase/FizzBoardTbStoreBoardScreensProvider';
import { BoardComponentWrapper } from '~/components/board-component/board-component-wrapper';
import { BoardLocationSettingId } from '~/zod-types/screen-config/board-location-setting';


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
          <BoardComponentWrapper
            rowCount={rowCount}
            columnCount={columnCount}
            boardLocationSettingId={boardLocationSettingId}
            isFullscreen={isFullscreen}
            onRequestFullscreen={onRequestFullscreen}
          />
        ) : (
          <FizzBoardAppFrame>
            <BoardComponentWrapper
              rowCount={rowCount}
              columnCount={columnCount}
              boardLocationSettingId={boardLocationSettingId}
              isFullscreen={isFullscreen}
              onRequestFullscreen={onRequestFullscreen}
            />
          <Inspector />
        </FizzBoardAppFrame>
        )
      }        
    </FizzBoardTbStoreBoardScreensProvider>
  );
};
