import React, {  } from "react";
import { MyPostCard } from "./my-post-card";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { MyPostCardTextContent } from "./my-post-card-text-content";
import { MyPostCardImageLink } from "./my-post-card-image-link";
import { FzbPostId } from "~/zod-types/branded-strings";
import { MyPostCardIframeLink } from "./my-post-card-iframe-link";


export interface ActionOption {
  label: string;
  onAction: (postId: FzbPostId) => void;
}


interface MyPostCardWrapperProps {
  post: FzbPostData;
  actionOptions: ActionOption[];
}


export const MyPostCardWrapper: React.FC<MyPostCardWrapperProps> = ({
  post,
  actionOptions,
}) => {

  if (post.postType === "text-content") {
    return (
      <MyPostCard postData={post} actionOptions={actionOptions}>
        <MyPostCardTextContent post={post} />
      </MyPostCard>
    );
  } else if (post.postType === "image-link") {
    return (
      <MyPostCard postData={post} actionOptions={actionOptions}>
        <MyPostCardImageLink post={post} />
      </MyPostCard>
    );
  } else if (post.postType === "iframe-link") {
    return (
      <MyPostCard postData={post} actionOptions={actionOptions}>
        <MyPostCardIframeLink post={post} />
      </MyPostCard>
    );
  }

  return (
    <MyPostCard postData={post} actionOptions={actionOptions}>
      <MyPostCardTextContent post={post} />
    </MyPostCard>
  );
};
