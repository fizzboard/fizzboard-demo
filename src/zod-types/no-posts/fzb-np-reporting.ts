import { z } from "zod";


export const FzbNpReportingDataSchema = z.object({
  noPostType: z.literal("np-reporting"),
  // message: z.string(),
});

export type FzbNpReportingData = z.infer<typeof FzbNpReportingDataSchema>;
