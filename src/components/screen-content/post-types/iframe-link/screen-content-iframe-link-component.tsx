import { FzbIframeLinkPostData } from "~/zod-types/posts/fzb-iframe-link-post";


export const ScreenContentIframeLinkComponent = ({ ...postData }: FzbIframeLinkPostData) => {
  const { iframeUrl } = postData;

  return (
    <div>
      <iframe src={iframeUrl} />
    </div>
  );
};
