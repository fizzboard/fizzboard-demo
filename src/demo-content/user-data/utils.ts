import { DemoBoardConfigData } from "~/zod-types/demo-users/demo-board-config-data"
import { UserBoard } from "~/zod-types/demo-users/user-board"
import { FzbBoardId } from "~/zod-types/branded-strings"


export const mapDemoBoardConfigToUserBoard = (boardConfig: DemoBoardConfigData): UserBoard => {
  return {
    id: boardConfig.id as unknown as FzbBoardId,
    name: boardConfig.name,
    description: boardConfig.description,
    createdAt: new Date(),
    updatedAt: new Date(),
    gridDimensionsId: boardConfig.gridDimensionsId,
    boardLocationSettingId: boardConfig.boardLocationSettingId,
    allScreenSettings: boardConfig.allScreenSettings,
  }
}