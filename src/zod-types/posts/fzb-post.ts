import { z } from "zod";
import { FzbImageLinkPostDataSchema } from "./fzb-image-link-post";
import { FzbTextContentPostDataSchema } from "./fzb-text-content-post";
import { FzbIframeLinkPostDataSchema } from "./fzb-iframe-link-post";
import { FzbUrlQrcodeWithCaptionPostDataSchema } from "./fzb-url-qrcode-with-caption";


export const FzbPostDataSchema = z.discriminatedUnion("postType", [
  FzbImageLinkPostDataSchema,
  FzbTextContentPostDataSchema,
  FzbIframeLinkPostDataSchema,
  FzbUrlQrcodeWithCaptionPostDataSchema,
]);

export type FzbPostData = z.infer<typeof FzbPostDataSchema>;



// export type FzbPostDataType = z.infer<typeof FzbPostDataTypeValues>;


export const FzbPostDataTypesSchema = z.union(
  FzbPostDataSchema.options.map(schema => schema.shape.postType)
).brand("FzbPostDataType");
// export type FzbPostDataType = z.infer<typeof FzbPostDataTypeSchema>;

// export const BoardLocationSettingIdsEnum = z.enum(
//   BoardLocationSettingIds
// );



// // Get all possible post type values programmatically
// export const PostTypeValues = FzbPostDataSchema.options
//   .map(schema => schema.shape.postType.value);

// export type PostTypeValues = z.infer<typeof PostTypeValues>;
// postTypeValues: ["image-link", "text-content", "iframe-link", "url-qrcode-with-caption"]

// export type FzbPostType = typeof FzbPostTypeValues[number];
