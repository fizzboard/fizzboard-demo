import { FzbPostId, FzbScreenId } from "~/zod-types/branded-strings";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { FzbScreenConfigData } from "~/zod-types/screen-config/fzb-screen-config";
import { ScreenContentPosterPlacedScreenImage } from "./sc-poster-invitation/sc-poster-placed-screen-image";
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK } from "~/zod-types/screen-config/fzb-show-permanent-blank";
import { ScreenContentPermanentBlank } from "./sc-show/permanent-blank";
import { SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE } from "~/zod-types/screen-config/fzb-poster-placed-screen-image";
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK } from "~/zod-types/screen-config/fzb-show-permanent-image";
import { ScreenContentImageLinkComponent } from "./post-types/image-link/screen-content-image-link-component";
import { FzbImageLinkPostData } from "~/zod-types/posts/fzb-image-link-post";
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_PDF_LINK } from "~/zod-types/screen-config/fzb-show-permanent-pdf";
import { FzbPdfLinkPostData } from "~/zod-types/posts/fzb-pdf-link-post";
import { ScreenContentPdfLinkComponent } from "./post-types/pdf-link/screen-content-pdf-link-component";
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IFRAME_LINK } from "~/zod-types/screen-config/fzb-show-permanent-iframe";
import { FzbIframeLinkPostData } from "~/zod-types/posts/fzb-iframe-link-post";
import { ScreenContentIframeLinkComponent } from "./post-types/iframe-link/screen-content-iframe-link-component";


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

export const ScreenContentComponent = ({ 
  screenId,
  screenPostData, 
  gridCoordinate, 
  sendPostToScreenUrl,
  screenConfig,
}: ScreenContentComponentProps) => {

  switch (screenConfig.screenType) {
    case SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK:
      return (
        <ScreenContentPermanentBlank />
      );
  
    case SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK: {
      const screenPostData: FzbImageLinkPostData = {
        id: `image-link-post-${screenId}` as FzbPostId,
        name: "Permanent Image",
        postType: "image-link",
        imageUrl: screenConfig.imageUrl,
        backgroundColor: screenConfig.backgroundColor,
      }

      return (
        <ScreenContentImageLinkComponent
          {...screenPostData}
        />
      );
    }

    case SCREEN_CONFIG_TYPE_SHOW_PERMANENT_PDF_LINK: {
      const screenPostData: FzbPdfLinkPostData = {
        id: `pdf-link-post-${screenId}` as FzbPostId,
        name: "Permanent PDF",
        postType: "pdf-link",
        pdfUrl: screenConfig.pdfUrl,
      }

      return (
        <ScreenContentPdfLinkComponent
          {...screenPostData}
        />
      );
    }

    case SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IFRAME_LINK: {
      const screenPostData: FzbIframeLinkPostData = {
        id: `iframe-link-post-${screenId}` as FzbPostId,
        name: "Permanent Iframe",
        postType: "iframe-link",
        iframeUrl: screenConfig.iframeUrl,
      }

      return (
        <ScreenContentIframeLinkComponent
          {...screenPostData}
        />
      );
    }

    case SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE:
      return (
        <ScreenContentPosterPlacedScreenImage
          screenId={screenId}
          screenPostData={screenPostData}
          gridCoordinate={gridCoordinate}
          sendPostToScreenUrl={sendPostToScreenUrl}
          screenConfig={screenConfig}
        />
      );

    default:
      return <div>Unsupported screen config type: {screenConfig.screenType}</div>;
  }
};
