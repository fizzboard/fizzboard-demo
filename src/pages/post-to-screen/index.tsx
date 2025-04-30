import { useParams } from "react-router-dom";
import { Inspector } from "tinybase/ui-react-inspector";
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame";
import { PostTypeSelector } from "~/components/post-type-selector";
import { FizzBoardTbStoreBoardScreensProvider } from "~/tinybase/FizzBoardTbStoreBoardScreensProvider";
import { FzbPostId, FzbScreenId } from "~/zod-types/branded-strings";
import { MyPostsCardGrid } from "../my-posts/card/my-posts-card-grid";
import { useFizzBoardAppData } from "~/tinybase/tb-app";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { VerticalSpacerDiv } from "~/components/common-divs";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { useState } from "react";
import { SelectedTypePostEditor } from "~/components/post-editors/selected-type-post-editor";
import { createDefaultTextPostData } from "~/components/post-type-selector/utils";
import { PostingToScreenDialog } from "~/components/posting-to-screen-dialog/posting-to-screen-dialog";
import { getBoardIdFromScreenId } from "~/utils";


export const PostToScreenPage = () => {

  const { id } = useParams();
  const screenId = id as FzbScreenId;

  const boardId = getBoardIdFromScreenId(screenId);

  const { myPosts } = useFizzBoardAppData();

  const [newPost, setNewPost] = useState<FzbPostData>(() => createDefaultTextPostData());
  const [isShowingPostDialog, setIsShowingPostDialog] = useState(false);


  const handleSendExistingPostToScreen = (postId: FzbPostId) => {
    console.log("postId", postId);
    console.log("newPost", newPost);
    setIsShowingPostDialog(true);
  };


  return (
    <FizzBoardTbStoreBoardScreensProvider tbBoardStoreId={boardId}>
      <FizzBoardAppFrame>
        <title>FizzBoard Demo - Post to Screen</title>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 600,
          mx: 'auto',
          p: 1,
        }}>
          <Typography>
            Post to Screen - {screenId}
          </Typography>

          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="post-type-content"
              id="post-type-header"
            >
              <Typography variant="h6">Post New</Typography>
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
                onClick={() => handleSendExistingPostToScreen(newPost.id)}
              >
                Send to Screen
              </Button>
            </AccordionDetails>
          </Accordion>

          <VerticalSpacerDiv height={20} />
          <Typography variant="h6">
            Post Existing
          </Typography>
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
                onAction: handleSendExistingPostToScreen,
              }
            ]}
          />
        </Box>

        <Inspector />

        {isShowingPostDialog && (
          <PostingToScreenDialog
            screenId={screenId}
            postContentData={newPost}
            onPostingComplete={() => setIsShowingPostDialog(false)}
            onPostingFailed={() => setIsShowingPostDialog(false)}
          />
        )}

      </FizzBoardAppFrame>
    </FizzBoardTbStoreBoardScreensProvider>
  );
};
