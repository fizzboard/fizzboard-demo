import { UserData } from "~/components/user-context/user-data-context";
import { mapDemoBoardConfigToUserBoard } from "./utils";
import { BoardLocationSettingId } from "~/zod-types/board-config/board-location-setting";
import { GridDimensionId } from "~/zod-types/board-config/grid-dimensions";
import { DemoBoardConfigData, DemoBoardConfigId } from "~/zod-types/demo-users/demo-board-config-data";
import { UserBoard } from "~/zod-types/demo-users/user-board";
import _ from "lodash";


const librarianDemoBoardConfigs: DemoBoardConfigData[] = [
  {
    id: "librarian-demo-board-book-recommendations" as DemoBoardConfigId,
    name: "Book Recommendations",
    description: "Book recommendations from library volunteers",
    gridDimensionsId: "2x2" as GridDimensionId,
    boardLocationSettingId: "bls-library" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 4).map(_ => ({
      screenType: "show-permanent-blank",
    })),
  },
  {
    id: "librarian-demo-board-book-reviews" as DemoBoardConfigId,
    name: "Book Reviews",
    description: "Book reviews from library patrons",
    gridDimensionsId: "2x1" as GridDimensionId,
    boardLocationSettingId: "bls-library" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 2).map(_ => ({
      screenType: "show-permanent-blank",
    })),
  },
]

const librarianDemoBoards: UserBoard[] = librarianDemoBoardConfigs.map(boardConfig => 
  mapDemoBoardConfigToUserBoard(boardConfig));


export const LibrarianAdminData: UserData = {
  profile: {
    id: "demo-admin-librarian",
    name: "Terry Booker",
    demoRole: "DisplayAdmin",
    demoTitle: "Librarian",
  },
  posts: [],
  boards: librarianDemoBoards,
  demoBoardConfigs: librarianDemoBoardConfigs,
  screens: [],
}
