import { FzbPostData, FzbPostDataType } from "~/zod-types/posts/fzb-post";
import { BoardLocationSettingId } from "~/zod-types/screen-config/board-location-setting";


export const getPostTypesForBoardLocationSetting = (boardLocationSettingId: BoardLocationSettingId): FzbPostDataType[] => {
  switch (boardLocationSettingId) {
    case "bls-only-images":
      return ["image-link"];
    case "bls-only-text":
      return ["text-content"];
    case "bls-only-iframes":
      return ["iframe-link"];
  }
  
  return ["text-content", "image-link", "iframe-link"];
};

export const filterPostsForBoardLocationSettingId = (posts: FzbPostData[], boardLocationSettingId: BoardLocationSettingId) => {
  const postTypes = getPostTypesForBoardLocationSetting(boardLocationSettingId);
  const filteredPosts = posts.filter((post) => postTypes.includes(post.postType));
  return filteredPosts;
};
