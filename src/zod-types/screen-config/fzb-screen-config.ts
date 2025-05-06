import z from "zod";
import { FzbScreenConfigPermanentImageDataSchema } from "./fzb-show-permanent-image";
import { FzbScreenConfigShowImageFromBoardImagePoolDataSchema } from "./fzb-show-image-from-board-image-pool";
import { FzbScreenConfigPosterInvitationAddImageToBoardImagePoolDataSchema } from "./fzb-poster-invitation-add-image-to-board-image-pool";
import { FzbScreenConfigPosterInvitationPlaceImageOnScreenDataSchema } from "./fzb-poster-invitation-place-image-on-screen";
import { FzbScreenConfigShowPermanentBlankDataSchema } from "./fzb-show-permanent-blank";


export const FzbScreenConfigDataSchema = z.discriminatedUnion("screenType", [
  FzbScreenConfigPermanentImageDataSchema,
  FzbScreenConfigShowImageFromBoardImagePoolDataSchema,
  FzbScreenConfigPosterInvitationAddImageToBoardImagePoolDataSchema,
  FzbScreenConfigPosterInvitationPlaceImageOnScreenDataSchema,
  FzbScreenConfigShowPermanentBlankDataSchema,
]);


export type FzbScreenConfigData = z.infer<typeof FzbScreenConfigDataSchema>;

export const FzbScreenConfigTypesSchema = z.union(
  FzbScreenConfigDataSchema.options.map(schema => schema.shape.screenType)
).brand("FzbScreenConfigType");
