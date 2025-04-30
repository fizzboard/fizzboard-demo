import { Paper } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { FzbScreenId } from "~/zod-types/branded-strings";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { PostedDataRenderer } from "./post-types/posted-data-renderer";

export interface Dimensions {
  width: number;
  height: number;
}

interface ScreenContentComponentProps {
  screenId: FzbScreenId;
  screenPostData: FzbPostData | null;
  gridCoordinate: string;
  sendPostToScreenUrl: string;
}

export const ScreenContentComponent = ({ 
  screenId,
  screenPostData, 
  gridCoordinate, 
  sendPostToScreenUrl 
}: ScreenContentComponentProps) => {

  const paperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);
  
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

  return (
    <Paper
      ref={paperRef}
      key={screenId}
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
      <PostedDataRenderer
        postedData={screenPostData}
        dimensions={dimensions}
        sendPostToScreenUrl={sendPostToScreenUrl}
        gridCoordinate={gridCoordinate}
      />
    </Paper>
  );
};
