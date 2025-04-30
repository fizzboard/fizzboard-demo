import { FzbImageLinkPostData } from "~/zod-types/posts/fzb-image-link-post";


export const ScreenContentImageLinkComponent = ({ ...postData }: FzbImageLinkPostData) => {
  const { imageUrl } = postData;

  return (
    <div>
      <img src={imageUrl} alt="Image" />
    </div>
  );
};
