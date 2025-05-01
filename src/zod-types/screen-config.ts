import { z } from "zod";
import { FzbBoardIdSchema } from "./branded-strings";


export const FzbBoardGridDimensionsSchema = z.enum([
  "1x1",
  "1x2",
  "2x1",
  "2x2",
]);

export type FzbBoardGridDimensions = z.infer<typeof FzbBoardGridDimensionsSchema>;



export const FzbBoardLayoutSchema = z.object({
  rowCount: z.number(),
  columnCount: z.number(),
});


export const FzbBoardLocationSettingEnum = z.enum([
  "Library",
  "Church",
  "School",
  "Small Retail",
  "Trade Show",
  "Mobile Vendor - Ordering",
  "Mobile Vendor - Feedback",
  "Corporate Environment - Formal",
  "Corporate Environment - Casual",
  "Home",
  "Other",
]);

export type FzbBoardLocationSetting = z.infer<typeof FzbBoardLocationSettingEnum>;


export const FzbBoardConfigSchema = z.object({
  id: FzbBoardIdSchema,
  name: z.string(),
  gridDimensions: FzbBoardGridDimensionsSchema,
  locationSetting: FzbBoardLocationSettingEnum,
});

export type FzbBoardConfig = z.infer<typeof FzbBoardConfigSchema>;
