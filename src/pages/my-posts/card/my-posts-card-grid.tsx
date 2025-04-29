import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { MyPostCardWrapper } from './my-post-card-wrapper';
import { FzbPostData } from '~/zod-types/posts/fzb-post';
import { ActionOption } from './my-post-card-wrapper';


type DataSorting = "none" | "asc" | "desc";
type DataSortingColumn = "lastModifiedTimestamp" | "createdAt" | "name";

interface IMyPostsCardGridProps {
  sortedAndFilteredPosts: FzbPostData[];
  sorting: DataSorting;
  activeSortingColumn: DataSortingColumn;
  setSorting: (sorting: DataSorting) => void;
  setActiveSortingColumn: (activeSortingColumn: DataSortingColumn) => void;

  actionOptions: ActionOption[];
}

export const MyPostsCardGrid = (props: IMyPostsCardGridProps) => {
  const { sortedAndFilteredPosts, actionOptions } = props;

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '50vh',
        p: 2
      }}
    >
      <Grid 
        container 
        spacing={3}
        sx={{
          maxWidth: {
            xs: '100%',
            sm: '900px',
            md: '1200px',
            lg: '1400px'
          },
          width: '100%',
          justifyContent: 'flex-start'
        }}
      >
        {sortedAndFilteredPosts.map((post) => (
          <Grid
            key={post.id}
            size={{
              xs: 12,              
              sm: 6,
              md: 4,
            }}
          >
            <MyPostCardWrapper post={post} actionOptions={actionOptions} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
