import { UserData } from "~/components/user-context/user-data-context";
import { BoardLocationSettingId } from "~/zod-types/board-config/board-location-setting";
import { GridDimensionId } from "~/zod-types/board-config/grid-dimensions";
import { DemoBoardConfigData, DemoBoardConfigId } from "~/zod-types/demo-users/demo-board-config-data";
import { UserBoard } from "~/zod-types/demo-users/user-board";
import { mapDemoBoardConfigToUserBoard } from "./utils";
import _ from "lodash";
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK } from "~/zod-types/screen-config/fzb-show-permanent-blank";


const hrCorporateDemoBoardConfigs: DemoBoardConfigData[] = [
  {
    id: "demo-board-config-hr-corporate-announcements" as DemoBoardConfigId,
    name: "Corporate Announcements",
    description: "Announcements for the entire company",
    gridDimensionsId: "2x1" as GridDimensionId,
    boardLocationSettingId: "bls-corporate-environment-formal" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 2).map(_ => ({
      screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK,
    })),
  },
  {
    id: "demo-board-config-hr-corporate-team" as DemoBoardConfigId,
    name: "Corporate - Team Board",
    description: "Team announcements and updates",
    gridDimensionsId: "2x1" as GridDimensionId,
    boardLocationSettingId: "bls-corporate-environment-informal" as BoardLocationSettingId,
    allScreenSettings: _.range(0, 2).map(_ => ({
      screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK,
    })),
  },
]

const hrCorporateDemoBoards: UserBoard[] = hrCorporateDemoBoardConfigs.map(boardConfig => 
  mapDemoBoardConfigToUserBoard(boardConfig));

export const CorporateHrAdminData: UserData = {
  profile: {
    id: "demo-admin-hr-corporate",
    name: "Sarah Johnson",
    demoRole: "DisplayAdmin",
    demoTitle: "Human Resources - Corporate",
  },
  posts: [],
  boards: hrCorporateDemoBoards,
  screens: [],
  demoBoardConfigs: hrCorporateDemoBoardConfigs,
}
