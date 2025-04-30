import { FzbImageLinkPostData } from "~/zod-types/posts/fzb-image-link-post";


interface IImageLinkPostEditorProps {
  postData: FzbImageLinkPostData;
  onUpdate: (updatedData: FzbImageLinkPostData) => void;
}

export const ImageLinkPostEditor = (props: IImageLinkPostEditorProps) => {
  const { postData } = props;
  return <div>{postData.imageUrl}</div>;
};
