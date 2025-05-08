import { createContext, useContext } from "react";
import { FzbPostData } from "../zod-types/posts/fzb-post";
import { createFizzBoardId } from "~/utils";
import { FzbPostId } from "~/zod-types/branded-strings";
import { FzbBoardConfig } from "~/zod-types/board-config/board-config";
import { GridDimensionId } from "~/zod-types/board-config/grid-dimensions";
import { BoardLocationSettingId } from "~/zod-types/board-config/board-location-setting";
import _ from "lodash";

const myDemoPosts: FzbPostData[] = [
  {
    id: "1" as FzbPostId,
    name: "Post 1",
    postType: "text-content",
    textContent: "This is a text post",
  },
  {
    id: "2" as FzbPostId,
    name: "Post 2",
    postType: "image-link",
    imageUrl: "https://georgekarbusphotography.com/wp-content/uploads/2018/04/best_orca_killer_whale_underwater_photos.jpg",
    backgroundColor: "#000000",
  },
  
];


export interface FizzBoardAppDataContextType {
  isDefault?: boolean;
  myPosts: FzbPostData[];
  boardConfig: FzbBoardConfig;
}

const initialFizzBoardAppData: FizzBoardAppDataContextType = {
  isDefault: true,
  myPosts: myDemoPosts,
  boardConfig: {
    boardId: createFizzBoardId(),
    name: "My First FizzBoard",
    gridDimensionsId: "2x2" as GridDimensionId,
    boardLocationSettingId: "bls-library" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 4).map(_ => ({
      screenType: "show-permanent-blank",
    })),
    // allScreenSettings: [
    //   {
    //     screenType: "show-permanent-blank",
    //   },
    //   {
    //     screenType: "show-pe",
    //     imageUrl: "https://georgekarbusphotography.com/wp-content/uploads/2018/04/best_orca_killer_whale_underwater_photos.jpg",
    //   },
    // ],
  },
};

export const FizzBoardAppDataContext = createContext<FizzBoardAppDataContextType>(initialFizzBoardAppData);

export const useFizzBoardAppData = () => {
  const context = useContext(FizzBoardAppDataContext);
  if (context === undefined) {
    throw new Error('useFizzBoardAppData must be used within an FizzBoardAppDataProvider');
  }
  return context;
};
