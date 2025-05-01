import { z } from "zod";
import { FzbNpInspirationalMessageDataSchema } from "./fzb-np-inspirational-message";
import { FzbNpPutYourPostHereDataSchema } from "./fzb-np-put-your-post-here";
import { FzbNpReportingDataSchema } from "./fzb-np-reporting";


export const FzbNoPostConfigSchema = z.discriminatedUnion("noPostType", [
  FzbNpInspirationalMessageDataSchema,
  FzbNpPutYourPostHereDataSchema,
  FzbNpReportingDataSchema,
]);


// Get all possible post type values programmatically
export const FzbNoPostConfigTypeValues = FzbNoPostConfigSchema.options.map(
  (schema) => schema.shape.noPostType.value
);

export type FzbNoPostConfigType = typeof FzbNoPostConfigTypeValues[number];
