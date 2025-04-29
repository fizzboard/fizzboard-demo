import { z } from "zod";
import { FzbScreenIdSchema } from "./branded-strings";


export const FzbScreenScanSchema = z.object({
  screenId: FzbScreenIdSchema,
});

export type FzbScreenScan = z.infer<typeof FzbScreenScanSchema>;
