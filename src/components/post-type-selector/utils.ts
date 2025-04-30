import { createNewPostId, SERVER_URL } from "~/utils";
import { FzbIframeLinkPostData } from "~/zod-types/posts/fzb-iframe-link-post";
import { FzbImageLinkPostData } from "~/zod-types/posts/fzb-image-link-post";
import { FzbPostData, FzbPostType } from "~/zod-types/posts/fzb-post";
import { FzbTextContentPostData } from "~/zod-types/posts/fzb-text-content-post";


export const createDefaultTextPostData = (): FzbTextContentPostData => {
  return {
    id: createNewPostId(),
    name: "Text Post @ " + new Date().toISOString(),
    postType: "text-content",
    textContent: "New FizzBoard Text Post @ " + new Date().toISOString(),
  };
};

export const createDefaultImagePostData = (): FzbImageLinkPostData => {
  return {
    id: createNewPostId(),
    name: "Image Post @ " + new Date().toISOString(),
    postType: "image-link",
    imageUrl: "https://via.placeholder.com/150",
  };
};

export const createDefaultIframePostData = (): FzbIframeLinkPostData => {
  return {
    id: createNewPostId(),
    name: "Iframe Post @ " + new Date().toISOString(),
    postType: "iframe-link",
    iframeUrl: SERVER_URL,
  };
};

export const createDefaultPostDataForPostType = (postType: FzbPostType): FzbPostData => {
  switch (postType) {
    case "text-content":
      return createDefaultTextPostData();
    case "image-link":
      return createDefaultImagePostData();
    case "iframe-link":
      return createDefaultIframePostData();
    default:
      throw new Error(`Unsupported post type: ${postType}`);
  }
};
