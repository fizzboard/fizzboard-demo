import { useParams } from "react-router-dom";
import { Inspector } from "tinybase/ui-react-inspector";
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame";
import { FizzBoardTbStoreBoardScreensProvider } from "~/tinybase/FizzBoardTbStoreBoardScreensProvider";
import { FzbPostId, FzbScreenId } from "~/zod-types/branded-strings";
import { Typography, Box } from "@mui/material";
import { FzbPostData } from "~/zod-types/posts/fzb-post";
import { useState } from "react";
import { PostingToScreenDialog } from "~/components/posting-to-screen-dialog/posting-to-screen-dialog";
import { getBoardIdFromScreenId } from "~/utils";
import { useDemoUserData } from "~/demo-content/demo-user-context";
import { MyPostsCardGrid } from "../my-posts/card/my-posts-card-grid";


export const PostToScreenPage = () => {

  const { id } = useParams();
  const screenId = id as FzbScreenId;

  // const [searchParams] = useSearchParams();
  // const settingsId = searchParams.get(BOARD_URL_PARAMS_BOARD_LOCATION_SETTING_ID);
  // const boardLocationSettingId = BoardLocationSettingIdsEnum
  //   .safeParse(settingsId).success 
  //   ? BoardLocationSettingIdsEnum.parse(settingsId)
  //   : "bls-other" as BoardLocationSettingId;

  const boardId = getBoardIdFromScreenId(screenId);

  // const { myPosts } = useFizzBoardAppData();
  const { posts } = useDemoUserData();
  const myPosts = posts;

  // const [newPost, setNewPost] = useState<FzbPostData>(() => 
  //   createDefaultPostDataForBoardLocation(boardLocationSettingId));
  const [isShowingPostDialog, setIsShowingPostDialog] = useState(false);

  const [postToSend, setPostToSend] = useState<FzbPostData | null>(null);



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

  // const shouldNewAccordionBeExpanded = myPosts.length === 0;
  // const shouldExistingAccordionBeExpanded = myPosts.length > 0;


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
            {/* <PostNewContentComponent
              allowedPostTypes={postTypesForThisScreen}
              newPost={newPost}
              defaultExpanded={shouldNewAccordionBeExpanded}
              setNewPost={setNewPost}
              onSendPostToScreen={handleSendNewPostToScreen}
            /> */}

            {/* <PostExistingContentComponent
              myPosts={myPostsForThisScreen}
              defaultExpanded={shouldExistingAccordionBeExpanded}
              onSendPostToScreen={handleSendExistingPostToScreen}
            /> */}

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
