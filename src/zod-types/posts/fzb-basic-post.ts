import { z } from "zod";
import { FzbPostIdSchema } from "../branded-strings";

export const FzbBasicPostDataSchema = z.object({
  id: FzbPostIdSchema,
  name: z.string(),
});

export type FzbBasicPostData = z.infer<typeof FzbBasicPostDataSchema>;
