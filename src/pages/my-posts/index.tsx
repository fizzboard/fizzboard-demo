import { Box, Typography, Button, Stack } from "@mui/material";
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame";
import { useState } from "react";
import { AddTextContentPostDialog } from "~/components/posts/AddTextContentPostDialog";
import { AddImageLinkPostDialog } from "~/components/AddImageLinkPostDialog";
import { MyPostsCardGrid } from "./card/my-posts-card-grid";
import { FzbPostId, FzbScreenId } from "~/zod-types/branded-strings";
import { QrCodeScanForScreenSlotDialog } from "~/components/qr-code/QrCodeScanForScreenSlotDialog";
import { PostingToScreenDialog } from "~/components/posting-to-screen-dialog/posting-to-screen-dialog";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { useDemoUserData } from "~/demo-content/demo-user-context";


export const DemoMyPosts = () => {
  const [isAddTextPostDialogOpen, setIsAddTextPostDialogOpen] = useState(false);
  const [isAddImagePostDialogOpen, setIsAddImagePostDialogOpen] = useState(false);

  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [isPostingData, setIsPostingData] = useState<FzbPostData | null>(null);
  const [screenId, setScreenId] = useState<FzbScreenId | null>(null);
  
  // const { myPosts } = useFizzBoardAppData();
  const { posts } = useDemoUserData();
  const myPosts: FzbPostData[] = posts.map(post => ({
    id: post.id as FzbPostId,
    name: post.title,
    postType: "text-content",
    textContent: post.content,
  }));

  const handleAddTextContentPost = (data: { name: string; textContent: string }) => {
    // TODO: Implement post creation
    console.log('Adding text post:', data);
  };

  const handleAddImageLinkPost = (data: { id: string; name: string; postType: 'image-link'; imageUrl: string }) => {
    // TODO: Implement post creation
    console.log('Adding image post:', data);
  };

  const handleScanQRForPostId = (postId: FzbPostId) => {
    console.log('Post id:', postId);
    const postData = myPosts.find(p => p.id === postId);
    if (postData) {
      setIsPostingData(postData);
      setIsScannerOpen(true);
    } else {
      console.error('Post not found:', postId);
    }
  };

  const handleScanForScreenComplete = (screenId: FzbScreenId) => {
    setScreenId(screenId);
    setIsScannerOpen(false);
    setIsPosting(true);
  };


  return (
    <FizzBoardAppFrame>
      <title>FizzBoard Demo - My Posts</title>
      <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1">
            My Posts
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => setIsAddTextPostDialogOpen(true)}
            >
              New Text Post
            </Button>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => setIsAddImagePostDialogOpen(true)}
            >
              New Image Post
            </Button>
          </Stack>
        </Box>
        <Typography variant="body1" component="p" gutterBottom>
          {myPosts.length} posts
        </Typography>
        <MyPostsCardGrid
          sortedAndFilteredPosts={myPosts}
          sorting="none"
          activeSortingColumn="name"
          setSorting={() => {}}
          setActiveSortingColumn={() => {}}
          actionOptions={[
            {
              label: "Scan QR",
              onAction: handleScanQRForPostId,
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
        isScannerOpen && (
          <QrCodeScanForScreenSlotDialog
            open={isScannerOpen}
            onClose={() => setIsScannerOpen(false)}
            onScreenScanComplete={handleScanForScreenComplete}
          />
        )
      }

      {
        isPosting && 
        screenId && 
        isPostingData && (
          <PostingToScreenDialog
            screenId={screenId}
            postContentData={isPostingData}
            onPostingComplete={() => setIsPosting(false)}
            onPostingFailed={() => setIsPosting(false)}
          />
        )
      }
    </FizzBoardAppFrame>
  );
};
