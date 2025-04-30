import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { FzbPostData, FzbPostType } from '~/zod-types/posts/fzb-post';
import { createDefaultPostDataForPostType } from './utils';


interface PostTypeSelectorProps {
  value: FzbPostType;
  onChange: (type: FzbPostData) => void;
}

export const PostTypeSelector = ({ value, onChange }: PostTypeSelectorProps) => {

  const handleChange = (postType: FzbPostType) => {
    console.log('postType', postType);
    const postData = createDefaultPostDataForPostType(postType);
    onChange(postData);
  };


  return (
    <FormControl fullWidth>
      <InputLabel id="post-type-select-label">Post Type</InputLabel>
      <Select
        labelId="post-type-select-label"
        value={value}
        label="Post Type"
        onChange={(e) => handleChange(e.target.value as FzbPostType)}
      >
        <MenuItem value="text-content">Text</MenuItem>
        <MenuItem value="image-link">Image</MenuItem>
        <MenuItem value="iframe-link">Iframe</MenuItem>
      </Select>
    </FormControl>
  );
};
