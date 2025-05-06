import { UserData } from "~/components/user-context/user-data-context";
import { BoardLocationSettingId } from "~/zod-types/board-config/board-location-setting";
import { GridDimensionId } from "~/zod-types/board-config/grid-dimensions";
import { DemoBoardConfigData, DemoBoardConfigId } from "~/zod-types/demo-users/demo-board-config-data";
import { UserBoard } from "~/zod-types/demo-users/user-board";
import { mapDemoBoardConfigToUserBoard } from "./utils";
import _ from "lodash";

const tradeShowOrganizerDemoBoardConfigs: DemoBoardConfigData[] = [
  {
    id: "demo-board-config-trade-show-organizer-pet-expo" as DemoBoardConfigId,
    name: "Pet Expo",
    description: "Pet Expo pictures",
    gridDimensionsId: "2x1" as GridDimensionId,
    boardLocationSettingId: "bls-trade-show" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 2).map(_ => ({
      screenType: "show-permanent-blank",
    })),
  },
  {
    id: "demo-board-config-trade-show-organizer-craft-fair" as DemoBoardConfigId,
    name: "Craft Fair",
    description: "Craft Fair vendor list",
    gridDimensionsId: "2x1" as GridDimensionId,
    boardLocationSettingId: "bls-trade-show" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 2).map(_ => ({
      screenType: "show-permanent-blank",
    })),
  },
  {
    id: "demo-board-config-trade-show-organizer-food-court" as DemoBoardConfigId,
    name: "Food Court",
    description: "Food Court menus",
    gridDimensionsId: "2x1" as GridDimensionId,
    boardLocationSettingId: "bls-trade-show" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 2).map(_ => ({
      screenType: "show-permanent-blank",
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

