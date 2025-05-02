import { z } from "zod";
import { FzbPostIdSchema } from "../branded-strings";


export const FzbPostDataTypeBrandKey = 'FzbPostDataType';

// const FzbPostDataTypeBrandSchema = z.brand(FzbPostDataTypeBrandKey);


// export const createBrandedFzbPostTypeSchema = (postType: string) => {
//   return z.literal(postType).brand("FzbPostDataType");
// };

// export const FzbPostDataTypeValues = z.union([
//   createBrandedFzbPostTypeSchema("text-content"),
//   createBrandedFzbPostTypeSchema("image-link"),
//   createBrandedFzbPostTypeSchema("iframe-link"),
//   createBrandedFzbPostTypeSchema("url-qrcode-with-caption")
// ]);

export const FzbPostDataTypeValues = [
  z.literal('text-content'),
  z.literal('image-link'),
  z.literal('iframe-link'),
  z.literal('url-qrcode-with-caption'),
] as const;

export type FzbPostDataTypeValues = typeof FzbPostDataTypeValues[number];


export const FzbPostDataTypeUnion = z.union(FzbPostDataTypeValues);


export type FzbPostDataType = z.infer<typeof FzbPostDataTypeUnion>;


// export const FzbPostDataTypeEnum = z.enum(FzbPostDataTypeValues
//   .map((value) => value.l) as [string, ...string[]]);


// export type FzbPostDataTypeEnum = z.infer<typeof FzbPostDataTypeEnum>;


// export const FzbPostDataTypeValues = z.union(
//   FzbPostDataTypeEnum.options.map((option) => 
//     createBrandedFzbPostTypeSchema(option as FzbPostDataType))
// );


// export type FzbPostDataType = z.infer<typeof FzbPostDataTypeValues>;


export const FzbBasicPostDataSchema = z.object({
  id: FzbPostIdSchema,
  name: z.string(),
});

export type FzbBasicPostData = z.infer<typeof FzbBasicPostDataSchema>;
