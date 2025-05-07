import { Box, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import { VerticalSpacerDiv } from '~/components/common-divs';
import { FzbUrlQrcodeWithCaptionPostData } from "~/zod-types/posts/fzb-url-qrcode-with-caption";


export const ScreenContentUrlQrcodeWithCaptionComponent = ({ ...postData }: FzbUrlQrcodeWithCaptionPostData) => {
  const { url, caption } = postData;

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography variant="h4">
        {caption}
      </Typography>
      <VerticalSpacerDiv height={20} />
        <QRCodeSVG 
          value={url}
        />
    </Box>
  );
};
