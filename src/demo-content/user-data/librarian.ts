import { UserData } from "~/components/user-context/user-data-context";
import { mapDemoBoardConfigToUserBoard } from "./utils";
import { BoardLocationSettingId } from "~/zod-types/board-config/board-location-setting";
import { GridDimensionId } from "~/zod-types/board-config/grid-dimensions";
import { DemoBoardConfigData, DemoBoardConfigId } from "~/zod-types/demo-users/demo-board-config-data";
import { UserBoard } from "~/zod-types/demo-users/user-board";
import _ from "lodash";
import { SERVER_HOST } from "~/utils";
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK } from "~/zod-types/screen-config/fzb-show-permanent-image";
import { SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE } from "~/zod-types/screen-config/fzb-poster-placed-screen-image";


const librarianDemoBoardConfigs: DemoBoardConfigData[] = [
  {
    id: "librarian-demo-board-community-events" as DemoBoardConfigId,
    name: "Community Events",
    description: "News of upcoming events and pictures/reviews from past ones",
    gridDimensionsId: "2x2" as GridDimensionId,
    boardLocationSettingId: "bls-library" as BoardLocationSettingId,
    allScreenSettings: [
      {
        screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK,
        imageUrl: `${SERVER_HOST}/fizzboard-demo/assets/demo-assets/library-reception/hosta-valley-upcoming-events.png`,
        backgroundColor: "#000000",
      },
      {
        screenType: SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE,
        invitationParameters: {
          screenType: "text-wrapped",
          aboveQrCodeText: "Have any pictures from past events?",
          belowQrCodeText: "Scan QR code to add your picture to the board!",
          demoUserId: "demo-poster-proud-parent",
        },
      },
      {
        screenType: SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE,
        invitationParameters: {
          screenType: "text-wrapped",
          aboveQrCodeText: "Have any pictures from past events?",
          belowQrCodeText: "Scan QR code to add your picture to the board!",
          demoUserId: "demo-poster-proud-parent",
        },
      },
      {
        screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK,
        imageUrl: `${SERVER_HOST}/fizzboard-demo/assets/demo-assets/library-reception/hosta-valley-community-library-banner.png`,
        backgroundColor: "#000000",
      },
    ],
  },
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
