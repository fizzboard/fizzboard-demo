import { z } from "zod";
import { GridDimensionIdSchema } from "../board-config/grid-dimensions";
import { BoardLocationSettingIdsSchema } from "../board-config/board-location-setting";
import { FzbScreenConfigDataSchema } from "../screen-config/fzb-screen-config";

export const DemoBoardConfigIdSchema = z.string().brand<"DemoBoardConfigId">();
export type DemoBoardConfigId = z.infer<typeof DemoBoardConfigIdSchema>;


export const DemoBoardConfigDataSchema = z.object({
  id: DemoBoardConfigIdSchema,
  name: z.string(),
  description: z.string(),
  gridDimensionsId: GridDimensionIdSchema,
  boardLocationSettingId: BoardLocationSettingIdsSchema,
  allScreenSettings: z.array(FzbScreenConfigDataSchema),
});

export type DemoBoardConfigData = z.infer<typeof DemoBoardConfigDataSchema>;
