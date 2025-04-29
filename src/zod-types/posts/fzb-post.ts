import { z } from "zod";
import { FzbImageLinkPostDataSchema } from "./fzb-image-link-post";
import { FzbTextContentPostDataSchema } from "./fzb-text-content-post";
import { FzbIframeLinkPostDataSchema } from "./fzb-iframe-link-post";


export const FzbPostDataSchema = z.discriminatedUnion("postType", [
  FzbImageLinkPostDataSchema,
  FzbTextContentPostDataSchema,
  FzbIframeLinkPostDataSchema,
]);

export type FzbPostData = z.infer<typeof FzbPostDataSchema>;

// Get all possible post type values programmatically
export const FzbPostTypeValues = FzbPostDataSchema.options.map(
  (schema) => schema.shape.postType.value
);

export type FzbPostType = typeof FzbPostTypeValues[number];
