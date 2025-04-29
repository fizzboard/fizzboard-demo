import { FzbImageLinkPostData } from "~/zod-types/posts/fzb-image-link-post";
import { Box } from "@mui/material";

type MyPostCardImageLinkProps = {
  post: FzbImageLinkPostData;
};

export const MyPostCardImageLink = (props: MyPostCardImageLinkProps) => {
  const { post } = props;

  return (
    <Box sx={{ 
      width: '100%', 
      height: '100%',
      display: 'flex',
    }}>
      <Box
        component="img"
        src={post.imageUrl}
        alt={post.name}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </Box>
  );
};
