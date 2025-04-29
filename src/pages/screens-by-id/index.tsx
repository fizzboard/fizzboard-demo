import { useParams } from "react-router-dom";
import { FzbPostId, FzbScreenId } from "~/zod-types/branded-strings";
import { useState } from "react";
import { AddImageLinkPostDialog } from "~/components/AddImageLinkPostDialog";
import { AddTextContentPostDialog } from "~/components/posts/AddTextContentPostDialog";
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame";
import { Box, Button, Typography } from "@mui/material";
import { VerticalSpacerDiv } from "~/components/common-divs";
import { MyPostsCardGrid } from "../my-posts/card/my-posts-card-grid";
import { useFizzBoardAppData } from "~/tinybase/tb-app";
import { PostingToScreenDialog } from "~/components/posting-to-screen-dialog/posting-to-screen-dialog";
import { FzbPostData } from "~/zod-types/posts/fzb-post";


export const DemoScreenSlot = () => {
  const { id } = useParams();
  const screenId = id as FzbScreenId;

  const [isAddTextPostDialogOpen, setIsAddTextPostDialogOpen] = useState(false);
  const [isAddImagePostDialogOpen, setIsAddImagePostDialogOpen] = useState(false);
  const [isPostingToScreenDialogOpen, setIsPostingToScreenDialogOpen] = useState(false);

  const [postContentData, setPostContentData] = useState<FzbPostData | null>(null);

  const { myPosts } = useFizzBoardAppData();


  const handleAddTextContentPost = (data: { name: string; textContent: string }) => {
    console.log('data', data);
  }

  const handleAddImageLinkPost = (data: { name: string; imageUrl: string }) => {
    console.log('data', data);
  }

  const handlePostToScreen = (postId: FzbPostId) => {
    console.log(`POST ${postId} TO SCREEN: ${screenId}`);
    const postData = myPosts.find(p => p.id === postId);

    if (postData) {
      setIsPostingToScreenDialogOpen(true);
      setPostContentData(postData);
    } else {
      console.error(`Post ${postId} not found`);
    }
  }

  const handlePostingToScreenComplete = () => {
    setIsPostingToScreenDialogOpen(false);
    setPostContentData(null);
  }

  const handlePostingToScreenFailed = () => {
    setIsPostingToScreenDialogOpen(false);
    setPostContentData(null);
  }
  

  return (
    <>
      <title>
        FizzBoard Demo - Post to Screen
      </title>
      <FizzBoardAppFrame>
        <Box sx={{
          maxWidth: 600, 
          mx: "auto", 
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}>
          <VerticalSpacerDiv height={20} />
          <Typography>Post to FizzBoard ID: {screenId}</Typography>
          <VerticalSpacerDiv height={20} />

          <Button 
            variant="contained" 
            color="primary"
            onClick={() => setIsAddTextPostDialogOpen(true)}
          >
            Post New Text
          </Button>

          <Button 
            variant="contained" 
            color="primary"
            onClick={() => setIsAddImagePostDialogOpen(true)}
          >
            Post New Image
          </Button>

          <MyPostsCardGrid
            sortedAndFilteredPosts={myPosts}
            sorting="none"
            activeSortingColumn="name"
            setSorting={() => {}}
            setActiveSortingColumn={() => {}}
            actionOptions={[
              {
                label: "Post",
                onAction: handlePostToScreen,
              }
            ]}
          />
        </Box>

        <AddTextContentPostDialog
          open={isAddTextPostDialogOpen}
          onClose={() => setIsAddTextPostDialogOpen(false)}
          onSubmit={handleAddTextContentPost}
        />
        <AddImageLinkPostDialog
          open={isAddImagePostDialogOpen}
          onClose={() => setIsAddImagePostDialogOpen(false)}
          onSubmit={handleAddImageLinkPost}
        />

        {
          isPostingToScreenDialogOpen &&
          screenId &&
          postContentData && (
            <PostingToScreenDialog
              screenId={screenId}
              postContentData={postContentData}
              onPostingComplete={handlePostingToScreenComplete}
              onPostingFailed={handlePostingToScreenFailed}
            />
          )
        }

      </FizzBoardAppFrame>
    </>
  )
}
