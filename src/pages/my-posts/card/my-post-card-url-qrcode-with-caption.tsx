import { FzbUrlQrcodeWithCaptionPostData } from "~/zod-types/posts/fzb-url-qrcode-with-caption";
import { Box, Typography } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";

interface MyPostCardUrlQrcodeWithCaptionProps {
  post: FzbUrlQrcodeWithCaptionPostData;
}

export const MyPostCardUrlQrcodeWithCaption = ({ post }: MyPostCardUrlQrcodeWithCaptionProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <QRCodeSVG 
        value={post.url}
        size={200}
      />
      <Typography variant="body1" align="center">
        {post.caption}
      </Typography>
    </Box>
  );
}; 