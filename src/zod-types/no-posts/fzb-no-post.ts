import { z } from "zod";
import { FzbNpInspirationalMessageDataSchema } from "./fzb-np-inspirational-message";
import { FzbNpPutYourPostHereDataSchema } from "./fzb-np-put-your-post-here";
import { FzbNpReportingDataSchema } from "./fzb-np-reporting";


export const FzbNoPostConfigSchema = z.discriminatedUnion("noPostType", [
  FzbNpInspirationalMessageDataSchema,
  FzbNpPutYourPostHereDataSchema,
  FzbNpReportingDataSchema,
]);


export const FzbNoPostConfigTypeValues = z.union(
  FzbNoPostConfigSchema.options.map(schema => schema.shape.noPostType)
);


export type FzbNoPostConfigType = z.infer<typeof FzbNoPostConfigTypeValues>;

