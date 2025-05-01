import { useParams } from "react-router-dom";
import { Inspector } from "tinybase/ui-react-inspector";
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame";
import { FizzBoardTbStoreBoardScreensProvider } from "~/tinybase/FizzBoardTbStoreBoardScreensProvider";
import { FzbPostId, FzbScreenId } from "~/zod-types/branded-strings";
import { useFizzBoardAppData } from "~/tinybase/tb-app";
import { Typography, Box } from "@mui/material";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { useState } from "react";
import { createDefaultTextPostData } from "~/components/post-type-selector/utils";
import { PostingToScreenDialog } from "~/components/posting-to-screen-dialog/posting-to-screen-dialog";
import { getBoardIdFromScreenId } from "~/utils";
import { PostNewContentComponent } from "./PostNewContentComponent";
import { PostExistingContentComponent } from "./PostExistingContentComponent";


export const PostToScreenPage = () => {

  const { id } = useParams();
  const screenId = id as FzbScreenId;

  const boardId = getBoardIdFromScreenId(screenId);

  const { myPosts } = useFizzBoardAppData();

  const [newPost, setNewPost] = useState<FzbPostData>(() => createDefaultTextPostData());
  const [isShowingPostDialog, setIsShowingPostDialog] = useState(false);

  const [postToSend, setPostToSend] = useState<FzbPostData | null>(null);


  // const handleSendExistingPostToScreen = (postId: FzbPostId) => {
  //   console.log("postId", postId);
  //   console.log("newPost", newPost);
  //   setIsShowingPostDialog(true);
  // };

  const handleSendNewPostToScreen = () => {
    console.log("newPost", newPost);
    setPostToSend(newPost);
    setIsShowingPostDialog(true);
  };

  const handleSendExistingPostToScreen = (postId: FzbPostId) => {
    console.log("postId", postId);
    const post = myPosts.find((post) => post.id === postId);
    if (post) {
      setPostToSend(post);
      setIsShowingPostDialog(true);
    } else {
      console.error("Post not found: ", postId);
    }
  };

  const shouldNewAccordionBeExpanded = myPosts.length === 0;
  const shouldExistingAccordionBeExpanded = myPosts.length > 0;


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
          height: '100%',
          overflow: 'hidden',
        }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Post to Screen
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            overflowY: 'auto',
            flex: 1,
            pb: 2,
          }}>
            <PostNewContentComponent
              newPost={newPost}
              defaultExpanded={shouldNewAccordionBeExpanded}
              setNewPost={setNewPost}
              onSendPostToScreen={handleSendNewPostToScreen}
            />

            <PostExistingContentComponent
              myPosts={myPosts}
              defaultExpanded={shouldExistingAccordionBeExpanded}
              onSendPostToScreen={handleSendExistingPostToScreen}
            />
          </Box>
        </Box>

        <Inspector />

        {
          isShowingPostDialog && 
          postToSend && (
            <PostingToScreenDialog
              screenId={screenId}
              postContentData={postToSend}
              onPostingComplete={() => setIsShowingPostDialog(false)}
              onPostingFailed={() => setIsShowingPostDialog(false)}
            />
          )
        }

      </FizzBoardAppFrame>
    </FizzBoardTbStoreBoardScreensProvider>
  );
};
