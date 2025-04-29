import { z } from "zod";
import { FzbBoardIdSchema } from "./branded-strings";


export const FzbBoardGridDimensionsSchema = z.union([
  z.literal("1x1"),
  z.literal("1x2"),
  z.literal("2x1"),
  z.literal("2x2"),
]);

export type FzbBoardGridDimensions = z.infer<typeof FzbBoardGridDimensionsSchema>;



export const FzbBoardLayoutSchema = z.object({
  rowCount: z.number(),
  columnCount: z.number(),
});


export const FzbBoardConfigSchema = z.object({
  id: FzbBoardIdSchema,
  name: z.string(),
  gridDimensions: FzbBoardGridDimensionsSchema,
});

export type FzbBoardConfig = z.infer<typeof FzbBoardConfigSchema>;
