import { FzbIframeLinkPostData } from "~/zod-types/posts/fzb-iframe-link-post";


interface IIframeLinkPostEditorProps {
  postData: FzbIframeLinkPostData;
  onUpdate: (updatedData: FzbIframeLinkPostData) => void;
}

export const IframeLinkPostEditor = (props: IIframeLinkPostEditorProps) => {
  const { postData } = props;
  return <div>{postData.iframeUrl}</div>;
};
