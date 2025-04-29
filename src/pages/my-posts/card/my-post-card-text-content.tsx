import { FzbTextContentPostData } from "~/zod-types/posts/fzb-text-content-post";


type MyPostCardTextContentProps = {
  post: FzbTextContentPostData;
};


export const MyPostCardTextContent = (props: MyPostCardTextContentProps) => {
  const { post } = props;

  return (
    <div>
      <p>{post.textContent}</p>
    </div>
  );
};
