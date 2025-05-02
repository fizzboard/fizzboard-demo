import { FzbScreenSlotId } from "~/zod-types/branded-strings";
import { FzbPostData } from "~/zod-types/posts/fzb-post";


export interface IPostToScreenApi {
  setPostDataJsonForGridLocation: (gridLocation: FzbScreenSlotId, postData: FzbPostData) => Promise<void>;
}

