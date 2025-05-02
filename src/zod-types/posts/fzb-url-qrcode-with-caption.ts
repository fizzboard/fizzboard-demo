import { z } from "zod";
import { FzbBasicPostDataSchema } from "./fzb-basic-post";


export const FzbUrlQrcodeWithCaptionPostDataSchema = FzbBasicPostDataSchema.extend({
  postType: z.literal("url-qrcode-with-caption"),
  url: z.string(),
  caption: z.string(),
});

export type FzbUrlQrcodeWithCaptionPostData = z.infer<typeof FzbUrlQrcodeWithCaptionPostDataSchema>;