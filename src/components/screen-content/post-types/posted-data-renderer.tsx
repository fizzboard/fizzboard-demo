import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { NoPostComponent } from "./no-post/no-post-component"
import { ScreenContentTextComponent } from "./text-content/screen-content-text-component";
import { ScreenContentIframeLinkComponent } from "./iframe-link/screen-content-iframe-link-component";
import { Dimensions } from "../ScreenContentComponent";
import { ScreenContentImageLinkComponent } from "./image-link/screen-content-image-link-component";


interface PostedDataRendererProps {
  postedData: FzbPostData | null;
  
  dimensions: Dimensions | null;
  sendPostToScreenUrl: string;
  gridCoordinate: string;
}

export const PostedDataRenderer = ({
  postedData: postData,
  dimensions,
  sendPostToScreenUrl,
  gridCoordinate,
}: PostedDataRendererProps) => {

  if (!postData) {
    return (
      <NoPostComponent
        dimensions={dimensions}
        sendPostToScreenUrl={sendPostToScreenUrl}
        gridCoordinate={gridCoordinate}
      />
    )
  }

  switch (postData.postType) {
    case "text-content":
      return <ScreenContentTextComponent {...postData} />
    case "image-link":
      return <ScreenContentImageLinkComponent {...postData} />
    case "iframe-link":
      return <ScreenContentIframeLinkComponent {...postData} />
    default:
      throw new Error(`Unknown post type: ${(postData as FzbPostData).postType}`);
  }
}
