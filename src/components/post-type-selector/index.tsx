import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { FzbPostDataType } from '~/zod-types/posts/fzb-post';


interface PostTypeSelectorProps {
  allowedPostTypes: FzbPostDataType[];
  value: FzbPostDataType;
  onChange: (type: FzbPostDataType) => void;
}

export const PostTypeSelector = ({ value, onChange, allowedPostTypes }: PostTypeSelectorProps) => {

  const handleChange = (postType: FzbPostDataType) => {
    console.log('postType', postType);
    onChange(postType);
  };


  return (
    <FormControl fullWidth>
      <InputLabel id="post-type-select-label">Post Type</InputLabel>
      <Select
        labelId="post-type-select-label"
        value={value}
        label="Post Type"
        onChange={(e) => handleChange(e.target.value as FzbPostDataType)}
      >
        {
          allowedPostTypes.map((postType) => (
            <MenuItem key={postType} value={postType}>{postType}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};
