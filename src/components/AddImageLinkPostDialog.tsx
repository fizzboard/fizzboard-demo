import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FzbImageLinkPostDataSchema } from '../zod-types/posts/fzb-image-link-post';
import { z } from 'zod';

// Create a form schema that matches the post schema but with string ID
const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  postType: z.literal('image-link'),
  imageUrl: z.string(),
});

type FormData = z.infer<typeof FormSchema>;

interface AddImageLinkPostDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: z.infer<typeof FzbImageLinkPostDataSchema>) => void;
}


export const AddImageLinkPostDialog = ({ open, onClose, onSubmit }: AddImageLinkPostDialogProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: '',
      name: '',
      postType: 'image-link',
      imageUrl: '',
    }
  });

  const handleFormSubmit = (data: FormData) => {
    // Validate the form data against the actual post schema
    const validatedData = FzbImageLinkPostDataSchema.parse(data);
    onSubmit(validatedData);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Image Link Post</DialogTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
          <TextField
            {...register('name')}
            label="Name"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            {...register('imageUrl')}
            label="Image URL"
            fullWidth
            margin="normal"
            error={!!errors.imageUrl}
            helperText={errors.imageUrl?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Add Post
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
