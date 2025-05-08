import { UserData } from "~/components/user-context/user-data-context";
import { BoardLocationSettingId } from "~/zod-types/board-config/board-location-setting";
import { GridDimensionId } from "~/zod-types/board-config/grid-dimensions";
import { DemoBoardConfigData, DemoBoardConfigId } from "~/zod-types/demo-users/demo-board-config-data";
import { UserBoard } from "~/zod-types/demo-users/user-board";
import { mapDemoBoardConfigToUserBoard } from "./utils";
import _ from "lodash";
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK } from "~/zod-types/screen-config/fzb-show-permanent-blank";
import { SERVER_HOST } from "~/utils";
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK } from "~/zod-types/screen-config/fzb-show-permanent-image";
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_PDF_LINK } from "~/zod-types/screen-config/fzb-show-permanent-pdf";
import { SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE } from "~/zod-types/screen-config/fzb-poster-placed-screen-image";

const tradeShowOrganizerDemoBoardConfigs: DemoBoardConfigData[] = [
  {
    id: "demo-board-config-trade-show-organizer-pet-expo" as DemoBoardConfigId,
    name: "Pet Expo",
    description: "Pet Expo vendor list",
    gridDimensionsId: "2x2" as GridDimensionId,
    boardLocationSettingId: "bls-trade-show" as BoardLocationSettingId,
    // allScreenSettings: _.range(0, 2).map(_ => ({
    //   screenType: "show-permanent-blank",
    // })),
    allScreenSettings: [
      {
        screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK,
        imageUrl: `${SERVER_HOST}/fizzboard-demo/assets/demo-assets/pet-expo/pet-expo-banner.jpg`,
        backgroundColor: "#000000",
      },
      {
        screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_PDF_LINK,
        pdfUrl: `${SERVER_HOST}/fizzboard-demo/assets/demo-assets/pet-expo/pet-expo-map.pdf`,
      },
      {
        screenType: SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE,
        invitationParameters: {
          screenType: "text-wrapped",
          aboveQrCodeText: "Are you a Pet Expo vendor? Want to be featured here?",
          belowQrCodeText: "Scan QR code to add your table to the board!",
        },
      },      {
        screenType: SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE,
        invitationParameters: {
          screenType: "text-wrapped",
          aboveQrCodeText: "Are you a Pet Expo vendor? Want to be featured here?",
          belowQrCodeText: "Scan QR code to add your table to the board!",
        },
      },
    ]
  },
  // {
  //   id: "demo-board-config-trade-show-organizer-craft-fair" as DemoBoardConfigId,
  //   name: "Craft Fair",
  //   description: "Craft Fair vendor list",
  //   gridDimensionsId: "2x1" as GridDimensionId,
  //   boardLocationSettingId: "bls-trade-show" as BoardLocationSettingId,
  //   allScreenSettings: _.range(0, 2).map(_ => ({
  //     screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK,
  //   })),
  // },
  {
    id: "demo-board-config-trade-show-organizer-food-court" as DemoBoardConfigId,
    name: "Food Court",
    description: "Food Court menus",
    gridDimensionsId: "2x1" as GridDimensionId,
    boardLocationSettingId: "bls-trade-show" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 2).map(_ => ({
      screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK,
    })),
  },
]

const tradeShowOrganizerDemoBoards: UserBoard[] = tradeShowOrganizerDemoBoardConfigs.map(boardConfig => 
  mapDemoBoardConfigToUserBoard(boardConfig));



export const TradeShowOrganizerScreenAdminData: UserData = {
  profile: {
    id: "demo-user-trade-show-organizer-screen-admin",
    name: "Martin Moppett",
    demoRole: "DisplayAdmin",
    demoTitle: "Trade Show Organizer",
  },
  posts: [],
  boards: tradeShowOrganizerDemoBoards,
  screens: [],
  demoBoardConfigs: tradeShowOrganizerDemoBoardConfigs,
}

