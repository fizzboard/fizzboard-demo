import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { TextPostEditor } from "../text-post-editor";
import { ImageLinkPostEditor } from "../image-link-post-editor";
import { IframeLinkPostEditor } from "../iframe-link-post-editor";


interface ISelectedTypePostEditorProps {
  postData: FzbPostData;
  onUpdate: <T extends FzbPostData>(updatedData: T) => void;
}

export const SelectedTypePostEditor = (props: ISelectedTypePostEditorProps) => {
  const { postData, onUpdate } = props;

  switch (postData.postType) {
    case 'text-content':
      return <TextPostEditor postData={postData} onUpdate={onUpdate} />;
    case 'image-link':
      return <ImageLinkPostEditor postData={postData} onUpdate={onUpdate} />;
    case 'iframe-link':
      return <IframeLinkPostEditor postData={postData} onUpdate={onUpdate} />;
    default:
      return null;
  }
};
