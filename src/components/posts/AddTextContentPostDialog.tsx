import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const TextContentPostFormSchema = z.object({
  name: z.string(),
  textContent: z.string(),
});

type TextContentPostFormData = z.infer<typeof TextContentPostFormSchema>;

interface AddTextContentPostDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TextContentPostFormData) => void;
}

export const AddTextContentPostDialog = ({
  open,
  onClose,
  onSubmit,
}: AddTextContentPostDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TextContentPostFormData>({
    resolver: zodResolver(TextContentPostFormSchema),
    defaultValues: {
      name: '',
      textContent: '',
    },
  });

  const handleFormSubmit = (data: TextContentPostFormData) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Text Content Post</DialogTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            variant="outlined"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message as string}
          />
          <TextField
            margin="dense"
            label="Content"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            {...register('textContent')}
            error={!!errors.textContent}
            helperText={errors.textContent?.message as string}
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