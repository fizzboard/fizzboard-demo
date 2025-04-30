import { FzbImageLinkPostData } from "~/zod-types/posts/fzb-image-link-post";
import { TextField, Button, Box, Typography } from "@mui/material";
import { ContentPaste } from "@mui/icons-material";
import { useState } from "react";

interface IImageLinkPostEditorProps {
  postData: FzbImageLinkPostData;
  onUpdate: (updatedData: FzbImageLinkPostData) => void;
}

export const ImageLinkPostEditor = (props: IImageLinkPostEditorProps) => {
  const { postData, onUpdate } = props;
  const [imageUrl, setImageUrl] = useState(postData.imageUrl);
  const [imageError, setImageError] = useState(false);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    setImageUrl(newUrl);
    setImageError(false);
    onUpdate({ ...postData, imageUrl: newUrl });
  };

  const handlePasteFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setImageUrl(clipboardText);
      setImageError(false);
      onUpdate({ ...postData, imageUrl: clipboardText });
    } catch (err) {
      console.error('Failed to read clipboard contents:', err);
    }
  };

  const handleImageError = () => {
    console.error('Failed to load image:', imageUrl);
    setImageError(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          label="Image URL"
          value={imageUrl}
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
      
      {imageUrl && !imageError && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" gutterBottom>Preview:</Typography>
          <Box
            component="img"
            src={imageUrl}
            alt="Image preview"
            sx={{
              maxWidth: '100%',
              maxHeight: '300px',
              objectFit: 'contain',
              border: '1px solid #ccc',
              borderRadius: 1,
            }}
            onError={handleImageError}
          />
        </Box>
      )}
      {imageError && (
        <Typography color="error" variant="body2">
          Failed to load image. Please check the URL and try again.
        </Typography>
      )}
    </Box>
  );
};
