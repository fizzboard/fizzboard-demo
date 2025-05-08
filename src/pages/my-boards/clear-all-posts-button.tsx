import { Button } from "@mui/material"
import { useFizzBoardTbStoreData } from "~/tinybase/FizzBoardTbStoreBoardScreensProvider";
import { FzbScreenSlotId } from "~/zod-types/branded-strings";


export const ClearAllPostsButton = () => {

  const { postToScreenApi } = useFizzBoardTbStoreData();

  
  const doClearAllPosts = () => {
    console.log("doClearAllPosts");

    postToScreenApi.clearPostDataJsonForGridLocation("A1" as FzbScreenSlotId);
    postToScreenApi.clearPostDataJsonForGridLocation("A2" as FzbScreenSlotId);
    postToScreenApi.clearPostDataJsonForGridLocation("B1" as FzbScreenSlotId);
    postToScreenApi.clearPostDataJsonForGridLocation("B2" as FzbScreenSlotId);
  }

  
  return (
    <Button 
      type="button" 
      variant="outlined" 
      color="primary" 
      fullWidth
      onClick={doClearAllPosts}
    >
      Clear All Posts
    </Button>
  )
}
