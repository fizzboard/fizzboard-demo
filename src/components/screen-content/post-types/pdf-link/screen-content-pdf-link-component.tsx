import { FzbPdfLinkPostData } from "~/zod-types/posts/fzb-pdf-link-post";
import { Box } from '@mui/material';

export const ScreenContentPdfLinkComponent = ({ ...postData }: FzbPdfLinkPostData) => {
  const { pdfUrl } = postData;

  // console.log("pdfUrl", pdfUrl);

  // const PDF_URL = "http://localhost:5173/fizzboard-demo/assets/demo-assets/pet-expo/pet-expo-map.pdf#toolbar=0";

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <iframe
        src={`${pdfUrl}#toolbar=0&view=FitB`}
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="PDF Viewer"
      />
    </Box>
  );
};
