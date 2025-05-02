import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { BoardLocationSettingId } from "~/zod-types/screen-config/board-location-setting";
import { FzbPostDataType } from "~/zod-types/posts/fzb-basic-post";


export const getPostTypesForBoardLocationSetting = (boardLocationSettingId: BoardLocationSettingId): FzbPostDataType[] => {
  switch (boardLocationSettingId) {
    case "bls-only-images":
      return ["image-link" as FzbPostDataType];
    case "bls-only-text":
      return ["text-content" as FzbPostDataType];
    case "bls-only-iframes":
      return ["iframe-link" as FzbPostDataType];
  }

  // return FzbPostDataTypeValues.options.map((option) => option.shape.postType.value);
  // const defaultPostTypes = FzbPostDataTypeUnion.options
  //   .map((option) => (option as { value: string }).value);

  // return FzbPostDataTypeValues.map(lit => (lit as ZodLiteral<string>).value);

  return [
    "text-content" as FzbPostDataType,
    "image-link" as FzbPostDataType,
    "iframe-link" as FzbPostDataType,
    "url-qrcode-with-caption" as FzbPostDataType,
  ]
};

export const filterPostsForBoardLocationSettingId = (posts: FzbPostData[], boardLocationSettingId: BoardLocationSettingId) => {
  const postTypes = getPostTypesForBoardLocationSetting(boardLocationSettingId);
  const filteredPosts = posts.filter((post) => postTypes.includes(post.postType));
  return filteredPosts;
};
