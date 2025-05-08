import { UserData } from "~/components/user-context/user-data-context";
import { SERVER_HOST } from "~/utils";
import { FzbPostId } from "~/zod-types/branded-strings";


export const TradeShowVendorData: UserData = {
  profile: {
    id: "demo-poster-trade-show-vendor",
    name: "Sam Salez",
    demoRole: "MessagePoster",
    demoTitle: "Trade Show Vendor",
  },
  posts: [
    {
      id: "1" as FzbPostId,
      name: "Super Pet Supplies - Fish/Reptiles",
      postType: "image-link",
      imageUrl: `${SERVER_HOST}/fizzboard-demo/assets/demo-assets/pet-expo-vendor/super-pet-supplies-banner.jpg`,
      backgroundColor: "#000000",
    },
    {
      id: "2" as FzbPostId,
      name: "Dogfood/Black - Super Pet Supplies",
      postType: "image-link",
      imageUrl: `${SERVER_HOST}/fizzboard-demo/assets/demo-assets/pet-expo-vendor/super-pet-supplies-dogfood-black-background.jpg`,
      backgroundColor: "#000000",
    },
    {
      id: "3" as FzbPostId,
      name: "Dogfood/White - Super Pet Supplies",
      postType: "image-link",
      imageUrl: `${SERVER_HOST}/fizzboard-demo/assets/demo-assets/pet-expo-vendor/super-pet-supplies-dogfood-white-background.jpg`,
      backgroundColor: "#FFFFFF",
    },
  ],
  boards: [],
  screens: [],
  demoBoardConfigs: [],
}
