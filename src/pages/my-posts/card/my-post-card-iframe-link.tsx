import { Box } from "@mui/material";
import { FzbIframeLinkPostData } from "~/zod-types/posts/fzb-iframe-link-post";


type MyPostCardIframeLinkProps = {
  post: FzbIframeLinkPostData;
};

export const MyPostCardIframeLink = (props: MyPostCardIframeLinkProps) => {
  const { post } = props;

  return (
    <Box sx={{ 
      width: '100%', 
      height: '100%',
      display: 'flex',
    }}>
      <Box
        component="iframe"
        src={post.iframeUrl}
        title={post.name}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </Box>
  );
};
