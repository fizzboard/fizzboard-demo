import z from "zod";
import { FzbBoardIdSchema } from "../branded-strings";
import { GridDimensionIdSchema } from "../board-config/grid-dimensions";
import { BoardLocationSettingIdsSchema } from "../board-config/board-location-setting";
import { FzbScreenConfigDataSchema } from "../screen-config/fzb-screen-config";


export const UserBoardSchema = z.object({
  id: FzbBoardIdSchema,
  name: z.string(),
  description: z.string(),

  gridDimensionsId: GridDimensionIdSchema,
  boardLocationSettingId: BoardLocationSettingIdsSchema,

  allScreenSettings: z.array(FzbScreenConfigDataSchema),
  
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserBoard = z.infer<typeof UserBoardSchema>;
