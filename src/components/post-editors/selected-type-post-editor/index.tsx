import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { TextPostEditor } from "../text-post-editor";
import { ImageLinkPostEditor } from "../image-link-post-editor";
import { IframeLinkPostEditor } from "../iframe-link-post-editor";
import { UrlQrcodeWithCaptionPostEditor } from "../url-qrcode-with-caption-editor";


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
    case 'url-qrcode-with-caption':
      return <UrlQrcodeWithCaptionPostEditor postData={postData} onUpdate={onUpdate} />;
    default: {
      console.error("No editor available for unsupported post type: ", (postData as { postType: string }).postType);
      return null;
    }
  }
};
