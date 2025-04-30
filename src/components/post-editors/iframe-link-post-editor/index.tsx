import { FzbIframeLinkPostData } from "~/zod-types/posts/fzb-iframe-link-post";
import { TextField, Button, Box, Typography } from "@mui/material";
import { ContentPaste } from "@mui/icons-material";
import { useState } from "react";

interface IIframeLinkPostEditorProps {
  postData: FzbIframeLinkPostData;
  onUpdate: (updatedData: FzbIframeLinkPostData) => void;
}

export const IframeLinkPostEditor = (props: IIframeLinkPostEditorProps) => {
  const { postData, onUpdate } = props;
  const [url, setUrl] = useState(postData.iframeUrl);
  const [iframeError, setIframeError] = useState(false);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    setUrl(newUrl);
    setIframeError(false);
    onUpdate({ ...postData, iframeUrl: newUrl });
  };

  const handlePasteFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setUrl(clipboardText);
      setIframeError(false);
      onUpdate({ ...postData, iframeUrl: clipboardText });
    } catch (err) {
      console.error('Failed to read clipboard contents:', err);
    }
  };

  const handleIframeError = () => {
    console.error('Failed to load iframe:', url);
    setIframeError(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          label="Iframe URL"
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
      
      {url && !iframeError && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" gutterBottom>Preview:</Typography>
          <Box
            sx={{
              width: '100%',
              height: '300px',
              border: '1px solid #ccc',
              borderRadius: 1,
              overflow: 'hidden',
            }}
          >
            <iframe
              src={url}
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Iframe preview"
              onError={handleIframeError}
            />
          </Box>
        </Box>
      )}
      {iframeError && (
        <Typography color="error" variant="body2">
          Failed to load iframe. Please check the URL and try again.
        </Typography>
      )}
    </Box>
  );
};
