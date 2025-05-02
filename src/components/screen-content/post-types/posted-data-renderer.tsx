import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { NoPostComponent } from "./no-post/no-post-component"
import { ScreenContentTextComponent } from "./text-content/screen-content-text-component";
import { ScreenContentIframeLinkComponent } from "./iframe-link/screen-content-iframe-link-component";
import { Dimensions } from "../ScreenContentComponent";
import { ScreenContentImageLinkComponent } from "./image-link/screen-content-image-link-component";
import { FzbNoPostConfigType } from "~/zod-types/no-posts/fzb-no-post";
import { FzbTextContentPostData } from "~/zod-types/posts/fzb-text-content-post";
import { FzbImageLinkPostData } from "~/zod-types/posts/fzb-image-link-post";
import { FzbIframeLinkPostData } from "~/zod-types/posts/fzb-iframe-link-post";
import { FzbUrlQrcodeWithCaptionPostData } from "~/zod-types/posts/fzb-url-qrcode-with-caption";
import { ScreenContentUrlQrcodeWithCaptionComponent } from "./url-qrcode-with-caption/screen-content-url-qrcode-with-caption";


interface ScreenDataRendererProps {
  postedData: FzbPostData | null;
  
  dimensions: Dimensions | null;
  sendPostToScreenUrl: string;
  gridCoordinate: string;
}

export const ScreenDataRenderer = (props: ScreenDataRendererProps) => {

  const {
    postedData,
    dimensions,
    sendPostToScreenUrl,
    gridCoordinate,
  } = props;

  if (!postedData) {
    const defaultNoPostType: FzbNoPostConfigType = "np-put-your-post-here";

    return (
      <NoPostComponent
        noPostType={defaultNoPostType}
        dimensions={dimensions}
        sendPostToScreenUrl={sendPostToScreenUrl}
        gridCoordinate={gridCoordinate}
      />
    )
  }

  switch (postedData.postType) {
    case "text-content":
      return <ScreenContentTextComponent {...postedData as FzbTextContentPostData} />
    case "image-link":
      return <ScreenContentImageLinkComponent {...postedData as FzbImageLinkPostData} />
    case "iframe-link":
      return <ScreenContentIframeLinkComponent {...postedData as FzbIframeLinkPostData} />
    case "url-qrcode-with-caption":
      return <ScreenContentUrlQrcodeWithCaptionComponent {...postedData as FzbUrlQrcodeWithCaptionPostData} />
    default:
      throw new Error(`Unknown post type for rendering: ${(postedData as FzbPostData).postType}`);
  }
}
