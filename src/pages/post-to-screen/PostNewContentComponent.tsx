import { AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material";
import { Accordion } from "@mui/material";
import { VerticalSpacerDiv } from "~/components/common-divs";
import { SelectedTypePostEditor } from "~/components/post-editors/selected-type-post-editor";
import { PostTypeSelector } from "~/components/post-type-selector";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const PostNewContentComponent = ({
  newPost,
  defaultExpanded,
  setNewPost,
  onSendPostToScreen,
}: {
  newPost: FzbPostData;
  defaultExpanded: boolean;
  setNewPost: (postData: FzbPostData) => void;
  onSendPostToScreen: () => void;
}) => {

  return (
    <Accordion
      defaultExpanded={defaultExpanded}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="post-new-content-header"
        id="post-new-content-header"
      >
        <Typography variant="h6">New</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <PostTypeSelector
          value={newPost.postType}
          onChange={(postData) => setNewPost(postData)}
        />
        <VerticalSpacerDiv height={20} />
        <SelectedTypePostEditor
          postData={newPost}
          onUpdate={(updatedData) => setNewPost(updatedData)}
        />
        <VerticalSpacerDiv height={20} />
        <Button
          variant="contained"
          fullWidth
          onClick={onSendPostToScreen}
        >
          Send to Screen
        </Button>
      </AccordionDetails>
    </Accordion>
  )
};
