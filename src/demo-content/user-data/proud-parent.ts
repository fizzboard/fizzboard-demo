import { UserData } from "~/components/user-context/user-data-context";
import { SERVER_HOST } from "~/utils";
import { FzbPostId } from "~/zod-types/branded-strings";
import { FzbPostData } from "~/zod-types/posts/fzb-post";



const proudParentDemoPosts: FzbPostData[] = [
  {
    id: "1" as FzbPostId,
    name: "Mystery Day",
    postType: "image-link",
    imageUrl: `${SERVER_HOST}/fizzboard-demo/assets/demo-assets/proud-parents/proud-parent-picture-1.jpg`,
  },
  {
    id: "2" as FzbPostId,
    name: "Maker Day",
    postType: "image-link",
    imageUrl: `${SERVER_HOST}/fizzboard-demo/assets/demo-assets/proud-parents/proud-parent-picture-2.jpg`,
  },
  {
    id: "3" as FzbPostId,
    name: "Text Post",
    postType: "text-content",
    textContent: "This is a text post",
  },
];


export const ProudParentData: UserData = {
  profile: {
    id: "demo-poster-proud-parent",
    name: "Fred Beans",
    demoRole: "MessagePoster",
    demoTitle: "Proud Parent",
  },
  posts: proudParentDemoPosts,
  boards: [],
  screens: [],
  demoBoardConfigs: [],
}
