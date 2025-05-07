import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Accordion } from "@mui/material";
import { VerticalSpacerDiv } from "~/components/common-divs";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FzbPostId } from "~/zod-types/branded-strings";
import { MyPostsCardGrid } from "../my-posts/card/my-posts-card-grid";


export const PostExistingContentComponent = ({
  myPosts,
  defaultExpanded,
  onSendPostToScreen,
}: {
  myPosts: FzbPostData[];
  defaultExpanded: boolean;
  onSendPostToScreen: (postId: FzbPostId) => void;
}) => {

  return (
    <Accordion
      defaultExpanded={defaultExpanded}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="post-existing-content-header"
        id="post-existing-content-header"
      >
        <Typography variant="h6">Saved</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <VerticalSpacerDiv height={20} />
        <MyPostsCardGrid
          sortedAndFilteredPosts={myPosts}
          sorting="none"
          activeSortingColumn="name"
          setSorting={() => {}}
          setActiveSortingColumn={() => {}}
          actionOptions={[
            {
              label: "Post",
              onAction: onSendPostToScreen,
            }
          ]}
        />

      </AccordionDetails>
    </Accordion>
  )
};
