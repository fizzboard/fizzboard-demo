import { Typography, Button, TextField, Box } from "@mui/material";
import { ContentPaste } from "@mui/icons-material";
import { useState } from "react";
import { FzbUrlQrcodeWithCaptionPostData } from "~/zod-types/posts/fzb-url-qrcode-with-caption";
import { QRCodeSVG } from "qrcode.react";


interface IUrlQrcodeWithCaptionPostEditorProps {
  postData: FzbUrlQrcodeWithCaptionPostData;
  onUpdate: (postData: FzbUrlQrcodeWithCaptionPostData) => void;
}

export const UrlQrcodeWithCaptionPostEditor = (props: IUrlQrcodeWithCaptionPostEditorProps) => {
  const { postData, onUpdate } = props;
  const [url, setUrl] = useState(postData.url);
  const [caption, setCaption] = useState(postData.caption);
  const [urlError, setUrlError] = useState(false);


  const handleCaptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCaption = event.target.value;
    setCaption(newCaption);
    onUpdate({ ...postData, caption: newCaption });
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    setUrl(newUrl);
    setUrlError(false);
    onUpdate({ ...postData, url: newUrl });
  };

  const handlePasteFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setUrl(clipboardText);
      setUrlError(false);
      onUpdate({ ...postData, url: clipboardText });
    } catch (err) {
      console.error('Failed to read clipboard contents:', err);
    }
  };

  // return <div>UrlQrcodeWithCaptionPostEditor</div>;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* <Box sx={{ display: 'flex', gap: 1 }}> */}
        <TextField
          fullWidth
          label="Caption"
          value={caption}
          onChange={handleCaptionChange}
          variant="outlined"
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, flex: 1 }}>
          <TextField
            fullWidth
            label="Destination URL"
            value={url}
            onChange={handleUrlChange}
            variant="outlined"
          />
          <Button
            variant="contained"
            onClick={handlePasteFromClipboard}
            sx={{ minWidth: '48px', px: 1 }}
            title="Paste from clipboard"
          >
            <ContentPaste />
          </Button>
        </Box>
      
      {url && !urlError && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {/* <Typography variant="subtitle2" gutterBottom>Preview:</Typography>
          <Box
            component="img"
            src={url}
            alt="Image preview"
            sx={{
              maxWidth: '100%',
              maxHeight: '300px',
              objectFit: 'contain',
              border: '1px solid #ccc',
              borderRadius: 1,
            }}
          /> */}
          <QRCodeSVG 
            value={url}
          />

        </Box>
      )}
      {urlError && (
        <Typography color="error" variant="body2">
          Failed to load link. Please check the URL and try again.
        </Typography>
      )}
    </Box>
  );
};
