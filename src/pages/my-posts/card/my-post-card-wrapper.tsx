import React, {  } from "react";
import { MyPostCard } from "./my-post-card";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { MyPostCardTextContent } from "./my-post-card-text-content";
import { MyPostCardImageLink } from "./my-post-card-image-link";
import { FzbPostId } from "~/zod-types/branded-strings";
import { MyPostCardIframeLink } from "./my-post-card-iframe-link";
import { MyPostCardUrlQrcodeWithCaption } from "./my-post-card-url-qrcode-with-caption";
import { FzbImageLinkPostData } from "~/zod-types/posts/fzb-image-link-post";
import { FzbIframeLinkPostData } from "~/zod-types/posts/fzb-iframe-link-post";
import { FzbUrlQrcodeWithCaptionPostData } from "~/zod-types/posts/fzb-url-qrcode-with-caption";
import { FzbTextContentPostData } from "~/zod-types/posts/fzb-text-content-post";


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
        <MyPostCardTextContent post={post as FzbTextContentPostData} />
      </MyPostCard>
    );
  } else if (post.postType === "image-link") {
    return (
      <MyPostCard postData={post} actionOptions={actionOptions}>
        <MyPostCardImageLink post={post as FzbImageLinkPostData} />
      </MyPostCard>
    );
  } else if (post.postType === "iframe-link") {
    return (
      <MyPostCard postData={post} actionOptions={actionOptions}>
        <MyPostCardIframeLink post={post as FzbIframeLinkPostData} />
      </MyPostCard>
    );
  } else if (post.postType === "url-qrcode-with-caption") {
    return (
      <MyPostCard postData={post} actionOptions={actionOptions}>
        <MyPostCardUrlQrcodeWithCaption post={post as FzbUrlQrcodeWithCaptionPostData} />
      </MyPostCard>
    );
  }
};
