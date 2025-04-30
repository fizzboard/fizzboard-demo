import { FzbImageLinkPostData } from "~/zod-types/posts/fzb-image-link-post";
import { Box } from '@mui/material';

export const ScreenContentImageLinkComponent = ({ ...postData }: FzbImageLinkPostData) => {
  const { imageUrl } = postData;

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt="Image"
        sx={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain'
        }}
      />
    </Box>
  );
};
