import { z } from "zod";
import { FzbBasicPostDataSchema } from "./fzb-basic-post";


export const FzbImageLinkPostDataSchema = FzbBasicPostDataSchema.extend({
  postType: z.literal("image-link"),
  imageUrl: z.string(),
});

export type FzbImageLinkPostData = z.infer<typeof FzbImageLinkPostDataSchema>;