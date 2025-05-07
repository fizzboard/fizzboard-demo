import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { Box, Paper, Button } from "@mui/material";
import { ActionOption } from "./my-post-card-wrapper";


interface MyPostCardProps {
  postData: FzbPostData;
  actionOptions: ActionOption[];
  children: React.ReactNode;
}

export const MyPostCard = (props: MyPostCardProps) => {
  const { postData, children, actionOptions } = props;

  return (
    <Paper 
      elevation={3}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        padding: 2,
        margin: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h5>{postData.name}</h5>
        {
          actionOptions.map((actionOption) => (
            <Button 
              key={actionOption.label}
              variant="outlined" 
              size="small"
              onClick={() => actionOption.onAction(postData.id)}
            >
              {actionOption.label}
            </Button>
          ))
        }
      </Box>
      
      <Box sx={{
        border: '5px solid #ccc',
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {children}
      </Box>
    </Paper>
  );
};
