import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { NoPostComponent } from "./no-post/no-post-component"
import { ScreenContentTextComponent } from "./text-content/screen-content-text-component";
import { ScreenContentIframeLinkComponent } from "./iframe-link/screen-content-iframe-link-component";
import { Dimensions } from "../ScreenContentComponent";
import { ScreenContentImageLinkComponent } from "./image-link/screen-content-image-link-component";
import { FzbNoPostConfigType } from "~/zod-types/no-posts/fzb-no-post";


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
      return <ScreenContentTextComponent {...postedData} />
    case "image-link":
      return <ScreenContentImageLinkComponent {...postedData} />
    case "iframe-link":
      return <ScreenContentIframeLinkComponent {...postedData} />
    default:
      throw new Error(`Unknown post type: ${(postedData as FzbPostData).postType}`);
  }
}
