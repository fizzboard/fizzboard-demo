import { AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material";
import { Accordion } from "@mui/material";
import { VerticalSpacerDiv } from "~/components/common-divs";
import { SelectedTypePostEditor } from "~/components/post-editors/selected-type-post-editor";
import { PostTypeSelector } from "~/components/post-type-selector";
import { FzbPostData, FzbPostDataType } from "~/zod-types/posts/fzb-post";
import { createDefaultPostDataForPostType } from "~/data/create-post-data";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const PostNewContentComponent = ({
  allowedPostTypes,
  newPost,
  defaultExpanded,
  setNewPost,
  onSendPostToScreen,
}: {
  allowedPostTypes: FzbPostDataType[];
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
          allowedPostTypes={allowedPostTypes}
          value={newPost.postType}
          onChange={(postType) => setNewPost(createDefaultPostDataForPostType(postType))}
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
