import { z } from "zod";


export const FzbNpInspirationalMessageDataSchema = z.object({
  noPostType: z.literal("np-inspirational-message"),
  message: z.string(),
});

export type FzbNpInspirationalMessageData = z.infer<typeof FzbNpInspirationalMessageDataSchema>;
