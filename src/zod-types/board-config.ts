import z from "zod";
import { BoardLocationSettingIdsSchema } from "./screen-config/board-location-setting";
import { FzbBoardIdSchema } from "./branded-strings";
import { GridDimensionIdSchema } from "./screen-config/grid-dimensions";


export const FzbBoardConfigSchema = z.object({
  boardId: FzbBoardIdSchema,
  name: z.string(),
  gridDimensionsId: GridDimensionIdSchema,
  boardLocationSettingId: BoardLocationSettingIdsSchema,
});

export type FzbBoardConfig = z.infer<typeof FzbBoardConfigSchema>;
