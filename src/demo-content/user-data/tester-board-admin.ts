import _ from "lodash";
import { UserData } from "~/components/user-context/user-data-context";
import { mapDemoBoardConfigToUserBoard } from "./utils";
import { BoardLocationSettingId } from "~/zod-types/board-config/board-location-setting";
import { GridDimensionId } from "~/zod-types/board-config/grid-dimensions";
import { DemoBoardConfigData, DemoBoardConfigId } from "~/zod-types/demo-users/demo-board-config-data";
import { UserBoard } from "~/zod-types/demo-users/user-board";
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK } from "~/zod-types/screen-config/fzb-show-permanent-blank";
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK } from "~/zod-types/screen-config/fzb-show-permanent-image";
import { SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE } from "~/zod-types/screen-config/fzb-poster-placed-screen-image";


const testerBoardAdminBoardConfigs: DemoBoardConfigData[] = [
  {
    id: "tester-board-admin-demo-board-all-blank" as DemoBoardConfigId,
    name: "All Blank",
    description: "All screens are blank",
    gridDimensionsId: "2x2" as GridDimensionId,
    boardLocationSettingId: "bls-library" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 4).map(_ => ({
      screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK,
    })),  
  },
  {
    id: "tester-board-admin-demo-board-all-image-links" as DemoBoardConfigId,
    name: "All Show Permanent Image Links",
    description: "All screens display a permanent image",
    gridDimensionsId: "2x1" as GridDimensionId,
    boardLocationSettingId: "bls-library" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 2).map(_ => ({
      screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK,
      imageUrl: "https://georgekarbusphotography.com/wp-content/uploads/2018/04/best_orca_killer_whale_underwater_photos.jpg",
      backgroundColor: "#000000",
    })),
  },
  {
    id: "tester-board-admin-demo-board-all-post-image-links" as DemoBoardConfigId,
    name: "All Post Image Links",
    description: "All screens display a link to post an image",
    gridDimensionsId: "2x2" as GridDimensionId,
    boardLocationSettingId: "bls-library" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 4).map(_ => ({
      screenType: SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE,
    })),
  },
]

const testerBoardAdminBoards: UserBoard[] = testerBoardAdminBoardConfigs.map(boardConfig => 
  mapDemoBoardConfigToUserBoard(boardConfig));


export const TesterBoardAdminData: UserData = {
  profile: {
    id: "demo-admin-tester-board",
    name: "Zach Admin",
    demoRole: "DisplayAdmin",
    demoTitle: "Zach T Admin",
  },
  posts: [],
  boards: testerBoardAdminBoards,
  demoBoardConfigs: testerBoardAdminBoardConfigs,
  screens: [],
}
