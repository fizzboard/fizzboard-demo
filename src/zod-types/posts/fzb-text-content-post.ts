import { z } from "zod";
import { FzbBasicPostDataSchema } from "./fzb-basic-post";


export const FzbTextContentPostDataSchema = FzbBasicPostDataSchema.extend({
  // postType: createBrandedFzbPostTypeSchema("text-content"),
  // postType: FzbPostDataTypeEnum.extract(["text-content"]),
  postType: z.literal("text-content"),
  textContent: z.string(),
});

export type FzbTextContentPostData = z.infer<typeof FzbTextContentPostDataSchema>;
