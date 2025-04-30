// import { Box, Button, TextField } from "@mui/material";
// import { useState } from "react";
// import { Inspector } from "tinybase/ui-react-inspector";
// import { PostingToScreenDialog } from "~/components/posting-to-screen-dialog/posting-to-screen-dialog";
// import { FizzBoardTbStoreBoardProvider } from "~/tinybase/FizzBoardTbStoreBoardProvider";
// import { createScreenId } from "~/utils";
// import { FzbPostId, FzbBoardId, FzbScreenSlotId } from "~/zod-types/branded-strings";
// import { FzbPostData } from "~/zod-types/posts/fzb-post";


// export const TestPostToScreenPage = () => {
//   const [isShowingPostDialog, setIsShowingPostDialog] = useState(false);

//   const boardId = "989e81de-d3b3-4bf9-8b97-b3a272cb1557" as FzbBoardId;
//   const gridLocation = "A2" as FzbScreenSlotId;
//   const screenId = createScreenId(boardId, gridLocation);
  

//   const postContentData: FzbPostData = {
//     id: "66bb4512-990c-4b6d-8c1f-a5ab7d2d38c2" as FzbPostId,
//     name: "Test Post @ " + new Date().toISOString(),
//     postType: "text-content",
//     textContent: "Hello, world22!",
//   };

//   const postContentDataJson = JSON.stringify(postContentData, null, 2);
  
//   return (
//     <FizzBoardTbStoreBoardProvider tbBoardStoreId={boardId}>
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="100vh"
//       >
//         <title>Test Post to Screen</title>
//         <Box 
//           display="flex"
//           flexDirection="column"
//           gap="1rem"
//           maxWidth="400px"
//           width="100%"
//           p={2}
//         >
//           <h1>Test Post to Screen</h1>
//           <TextField
//             label="Screen ID"
//             value={screenId}
//             disabled
//             fullWidth
//           />
//           <TextField
//             label="Post Content"
//             value={postContentDataJson}
//             disabled
//             multiline
//             rows={4}
//             fullWidth
//           />
//           <Button 
//             onClick={() => setIsShowingPostDialog(true)}
//             variant="contained"
//             disabled={!screenId || !postContentData}
//           >
//             Post to Screen
//           </Button>
//           {isShowingPostDialog && (
//             <PostingToScreenDialog
//               screenId={screenId}
//               postContentData={postContentData}
//               onPostingComplete={() => setIsShowingPostDialog(false)}
//               onPostingFailed={() => setIsShowingPostDialog(false)}
//             />
//           )}
//         </Box>
//         <Inspector />
//       </Box>
//     </FizzBoardTbStoreBoardProvider>
//   );
// };
