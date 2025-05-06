import { createNewPostId } from "~/utils";
import { FzbIframeLinkPostData, FzbIframeLinkPostDataSchema } from "~/zod-types/posts/fzb-iframe-link-post";
import { FzbImageLinkPostData, FzbImageLinkPostDataSchema } from "~/zod-types/posts/fzb-image-link-post";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { FzbTextContentPostData, FzbTextContentPostDataSchema } from "~/zod-types/posts/fzb-text-content-post";
import { BoardLocationSettingId } from "~/zod-types/board-config/board-location-setting";
import { getPostTypesForBoardLocationSetting } from "./posts-boards-utils";
import { FzbPostDataType } from "~/zod-types/posts/fzb-basic-post";
import { FzbUrlQrcodeWithCaptionPostData } from "~/zod-types/posts/fzb-url-qrcode-with-caption";
import { FzbUrlQrcodeWithCaptionPostDataSchema } from "~/zod-types/posts/fzb-url-qrcode-with-caption";


export const createDefaultTextPostData = (): FzbTextContentPostData => {
  const retVal = FzbTextContentPostDataSchema.parse({
    postType: "text-content",
    id: createNewPostId(),
    name: "Text Post @ " + new Date().toISOString(),
    textContent: "New FizzBoard Text Post @ " + new Date().toISOString(),
  });
  return retVal;
};

export const createDefaultImagePostData = (): FzbImageLinkPostData => {
  const retVal = FzbImageLinkPostDataSchema.parse({
    postType: "image-link",
    id: createNewPostId(),
    name: "Image Post @ " + new Date().toISOString(),
    imageUrl: "https://georgekarbusphotography.com/wp-content/uploads/2018/04/best_orca_killer_whale_underwater_photos.jpg",
  });
  return retVal;
};

export const createDefaultIframePostData = (): FzbIframeLinkPostData => {
  const retVal = FzbIframeLinkPostDataSchema.parse({
    postType: "iframe-link",
    id: createNewPostId(),
    name: "Iframe Post @ " + new Date().toISOString(),
    iframeUrl: "https://fizzboard.github.io/fizzboard-demo/",
  });
  return retVal;
};

export const createDefaultUrlQrcodeWithCaptionPostData = (): FzbUrlQrcodeWithCaptionPostData => {
  const retVal = FzbUrlQrcodeWithCaptionPostDataSchema.parse({
    postType: "url-qrcode-with-caption",
    id: createNewPostId(),
    name: "URL QR Code with Caption Post @ " + new Date().toISOString(),
    url: "https://fizzboard.github.io/fizzboard-demo/",
    caption: "Run your own FizzBoard Demo",
  });
  return retVal;
};


export const createDefaultPostDataForPostType = (postType: FzbPostDataType): FzbPostData => {
  switch (postType) {
    case "text-content":
      return createDefaultTextPostData();
    case "image-link":
      return createDefaultImagePostData();
    case "iframe-link":
      return createDefaultIframePostData();
    case "url-qrcode-with-caption":
      return createDefaultUrlQrcodeWithCaptionPostData();
    default:
      throw new Error(`Unsupported post type: ${postType}`);
  }
};


export const createDefaultPostDataForBoardLocation = (boardLocationSettingId: BoardLocationSettingId): FzbPostData => {
  const postTypes = getPostTypesForBoardLocationSetting(boardLocationSettingId);
  const defaultPostType = postTypes[0];
  const defaultPostData = createDefaultPostDataForPostType(defaultPostType);
  return defaultPostData;
};
