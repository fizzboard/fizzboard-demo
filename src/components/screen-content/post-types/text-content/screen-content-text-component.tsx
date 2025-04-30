import { FzbTextContentPostData } from "~/zod-types/posts/fzb-text-content-post";
import { Box, Typography } from "@mui/material";

export const ScreenContentTextComponent = ({ ...postData }: FzbTextContentPostData) => {
  const { textContent } = postData;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
    >
      <Typography variant="h4">
        {textContent}
      </Typography>
    </Box>
  );
};
