import z from "zod";
import { FzbScreenConfigShowPermanentImageDataSchema } from "./fzb-show-permanent-image";
import { FzbScreenConfigPosterPlacedScreenImageDataSchema } from "./fzb-poster-placed-screen-image";
import { FzbScreenConfigShowImageFromBoardImagePoolDataSchema } from "./fzb-show-image-from-board-image-pool";
import { FzbScreenConfigPosterInvitationAddImageToBoardImagePoolDataSchema } from "./fzb-poster-invitation-add-image-to-board-image-pool";
import { FzbScreenConfigShowPermanentBlankDataSchema } from "./fzb-show-permanent-blank";
import { FzbScreenConfigShowPermanentPdfDataSchema } from "./fzb-show-permanent-pdf";
import { FzbScreenConfigShowPermanentIframeDataSchema } from "./fzb-show-permanent-iframe";


export const FzbScreenConfigDataSchema = z.discriminatedUnion("screenType", [
  FzbScreenConfigShowPermanentBlankDataSchema,
  FzbScreenConfigShowPermanentImageDataSchema,
  FzbScreenConfigShowPermanentPdfDataSchema,
  FzbScreenConfigShowPermanentIframeDataSchema,
  
  FzbScreenConfigPosterPlacedScreenImageDataSchema,

  FzbScreenConfigShowImageFromBoardImagePoolDataSchema,
  FzbScreenConfigPosterInvitationAddImageToBoardImagePoolDataSchema,
]);


export type FzbScreenConfigData = z.infer<typeof FzbScreenConfigDataSchema>;

// export const FzbScreenConfigTypesSchema = z.union(
//   FzbScreenConfigDataSchema.options.map(schema => schema.shape.screenType)
// ).brand("FzbScreenConfigType");
