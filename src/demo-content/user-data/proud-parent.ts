import { UserData } from "~/components/user-context/user-data-context";
import { FzbPostId } from "~/zod-types/branded-strings";
import { UserPost } from "~/zod-types/demo-users/user-post";



const proudParentDemoPosts: UserPost[] = [
  {
    id: "1" as FzbPostId,
    title: "Post 1",
    content: "This is a text post",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2" as FzbPostId,
    title: "Post 2",
    content: "This is a text post",
    createdAt: new Date(),
    updatedAt: new Date(),
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
