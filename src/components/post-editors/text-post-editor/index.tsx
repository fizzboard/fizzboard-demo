import { FzbTextContentPostData } from "~/zod-types/posts/fzb-text-content-post";
import { useState } from "react";
import { TextField } from "@mui/material";

interface ITextPostEditorProps {
  postData: FzbTextContentPostData;
  onUpdate: (updatedData: FzbTextContentPostData) => void;
}

export const TextPostEditor = (props: ITextPostEditorProps) => {
  const { postData, onUpdate } = props;
  const [textContent, setTextContent] = useState(postData.textContent);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setTextContent(newText);
    if (onUpdate) {
      onUpdate({
        ...postData,
        textContent: newText,
      });
    }
  };

  return (
    <TextField
      fullWidth
      multiline
      minRows={10}
      maxRows={20}
      value={textContent}
      onChange={handleTextChange}
      placeholder="Enter your text content here..."
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: 'primary.main',
          },
        },
      }}
    />
  );
};
