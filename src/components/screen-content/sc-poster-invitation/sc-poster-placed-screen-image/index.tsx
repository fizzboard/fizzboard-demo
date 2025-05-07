import { Paper } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { FzbScreenId } from "~/zod-types/branded-strings";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { FzbScreenConfigData } from "~/zod-types/screen-config/fzb-screen-config";
import { ScreenDataRenderer } from "../../post-types/screen-data-renderer";
import { SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE } from "~/zod-types/screen-config/fzb-poster-placed-screen-image";


export interface Dimensions {
  width: number;
  height: number;
}

interface ScreenContentComponentProps {
  screenId: FzbScreenId;
  screenPostData: FzbPostData | null;
  gridCoordinate: string;
  sendPostToScreenUrl: string;
  screenConfig: FzbScreenConfigData;
}

export const ScreenContentPosterPlacedScreenImage = ({ 
  screenId,
  screenPostData, 
  gridCoordinate, 
  sendPostToScreenUrl,
  screenConfig,
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

  if (screenConfig.screenType !== SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE) {
    return null;
  }

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
      <ScreenDataRenderer
        postedData={screenPostData}
        screenConfig={screenConfig}
        dimensions={dimensions}
        sendPostToScreenUrl={sendPostToScreenUrl}
        gridCoordinate={gridCoordinate}
      />
    </Paper>
  );
};
