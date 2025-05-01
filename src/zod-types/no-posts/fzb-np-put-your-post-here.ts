import { z } from "zod";


export const FzbNpPutYourPostHereDataSchema = z.object({
  noPostType: z.literal("np-put-your-post-here"),
  // message: z.string(),
});

export type FzbNpPutYourPostHereData = z.infer<typeof FzbNpPutYourPostHereDataSchema>;
