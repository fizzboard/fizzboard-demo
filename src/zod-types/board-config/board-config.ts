import z from "zod";
import { BoardLocationSettingIdsSchema } from "./board-location-setting";
import { FzbBoardIdSchema } from "../branded-strings";
import { GridDimensionIdSchema } from "./grid-dimensions";
import { FzbScreenConfigDataSchema } from "../screen-config/fzb-screen-config";


export const FzbBoardConfigSchema = z.object({
  boardId: FzbBoardIdSchema,
  name: z.string(),
  gridDimensionsId: GridDimensionIdSchema,
  boardLocationSettingId: BoardLocationSettingIdsSchema,
  allScreenSettings: z.array(FzbScreenConfigDataSchema),
});

export type FzbBoardConfig = z.infer<typeof FzbBoardConfigSchema>;
