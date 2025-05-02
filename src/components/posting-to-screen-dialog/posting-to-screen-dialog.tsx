import { DialogContent, DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import { useFizzBoardTbStoreData } from "~/tinybase/FizzBoardTbStoreBoardScreensProvider";
import { getScreenSlotIdFromScreenId } from "~/utils";
import { FzbScreenId } from "~/zod-types/branded-strings";
import { FzbPostData } from "~/zod-types/posts/fzb-post";


interface PostingToScreenDialogProps {
  screenId: FzbScreenId;
  postContentData: FzbPostData;

  onPostingComplete: () => void;
  onPostingFailed: () => void;
}

export const PostingToScreenDialog = ({ screenId, postContentData, onPostingComplete, onPostingFailed }: PostingToScreenDialogProps) => {

  const [isPosting, setIsPosting] = useState(true);

  const { postToScreenApi } = useFizzBoardTbStoreData();

  const screenSlotId = getScreenSlotIdFromScreenId(screenId);

  useEffect(() => {
    if (isPosting) {
      const postToScreen = async () => {
        try {
          await postToScreenApi.setPostDataJsonForGridLocation(screenSlotId, postContentData);
          setIsPosting(false);
          onPostingComplete();
        } catch (error) {
          console.error('Failed to post to screen:', error);
          setIsPosting(false);
          onPostingFailed();
        }
      };
      
      postToScreen();
    }
  }, [isPosting, onPostingComplete, onPostingFailed, screenId, postContentData, screenSlotId, postToScreenApi]);

  const postContentJson = JSON.stringify(postContentData, null, 2);

  
  return (
    <Dialog open={true} onClose={() => {}}>
      <DialogTitle>Posting...</DialogTitle>
      <DialogContent>
        <pre>{postContentJson}</pre>
        to
        <pre>{screenId}</pre>
      </DialogContent>

    </Dialog>
  );
};
