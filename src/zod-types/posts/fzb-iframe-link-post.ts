import { z } from "zod";
import { FzbBasicPostDataSchema } from "./fzb-basic-post";


export const FzbIframeLinkPostDataSchema = FzbBasicPostDataSchema.extend({
  postType: z.literal("iframe-link"),
  iframeUrl: z.string(),
});

export type FzbIframeLinkPostData = z.infer<typeof FzbIframeLinkPostDataSchema>;
