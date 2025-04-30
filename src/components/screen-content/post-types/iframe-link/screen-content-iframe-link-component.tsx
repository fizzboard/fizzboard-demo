import { FzbIframeLinkPostData } from "~/zod-types/posts/fzb-iframe-link-post";
import { Box } from '@mui/material';

export const ScreenContentIframeLinkComponent = ({ ...postData }: FzbIframeLinkPostData) => {
  const { iframeUrl } = postData;

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <Box
        component="iframe"
        src={iframeUrl}
        sx={{
          width: '100%',
          height: '100%',
          border: 'none',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
    </Box>
  );
};
