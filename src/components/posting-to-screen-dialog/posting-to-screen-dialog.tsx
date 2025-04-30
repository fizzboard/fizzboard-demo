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

  const { setPostDataJsonForGridLocation } = useFizzBoardTbStoreData();

  const screenSlotId = getScreenSlotIdFromScreenId(screenId);

  useEffect(() => {
    if (isPosting) {
      setPostDataJsonForGridLocation(screenSlotId, postContentData);
      setTimeout(() => {
        setIsPosting(false);
        onPostingComplete();
      }, 1000);
    }
  }, [isPosting, onPostingComplete, onPostingFailed, screenId, postContentData, screenSlotId, setPostDataJsonForGridLocation]);

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
