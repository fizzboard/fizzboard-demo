import { Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { FzbBoardId } from "~/zod-types/branded-strings";
import { getGridCoordinate, SERVER_URL } from "~/utils";
import { Link } from "react-router-dom";
import { useFizzBoardTbStoreData } from "~/tinybase/FizzBoardTbStoreBoardProvider";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { isEqual } from "lodash";


interface ScreenSlotProps {
  boardId: FzbBoardId;
  rowIndex: number;
  colIndex: number;
}

interface Dimensions {
  width: number;
  height: number;
}

export const ScreenContentComponent = ({ boardId, rowIndex, colIndex }: ScreenSlotProps) => {
  const paperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);
  const [screenPostData, setScreenPostData] = useState<FzbPostData | null>(null);

  const gridCoordinate = getGridCoordinate(rowIndex, colIndex);

  const tbData = useFizzBoardTbStoreData();

  const postForCoordinate = tbData.gridPostsData.get(gridCoordinate);
  if (postForCoordinate) {
    if (!isEqual(postForCoordinate, screenPostData)) {
      setScreenPostData(postForCoordinate);
      console.log("SETTING SCREEN POST DATA", postForCoordinate);
    }
  }

  useEffect(() => {
    const element = paperRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // const screenScanJson = JSON.stringify(FzbScreenScanSchema.parse({
  //   screenId,
  // }));

  const sendPostToScreenPath = "/post-to-screen/" + boardId + ":" + gridCoordinate;
  const sendPostToScreenUrl = SERVER_URL + sendPostToScreenPath;

  if (screenPostData) {
    const screenContent = JSON.stringify(screenPostData);

    return (
      <div>{screenContent}</div>
    )
  }


  return (
    <Paper
      ref={paperRef}
      key={`${rowIndex}-${colIndex}`}
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.secondary',
        border: '1px solid #000',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      {dimensions && (
        <>
          <div>
            {`${dimensions.width.toFixed(0)}x${dimensions.height.toFixed(0)}`}
          </div>
          <div>
            {`${(dimensions.width / dimensions.height).toFixed(2)}:1`}
          </div>
        </>
      )}
      <div>
      </div>
      <QRCodeSVG 
        // value={screenScanJson}
        value={sendPostToScreenUrl}
        size={100}
        level="H"
      />
      <Link 
        to={sendPostToScreenUrl}
      >
        {gridCoordinate}
      </Link>
    </Paper>
  )
};
