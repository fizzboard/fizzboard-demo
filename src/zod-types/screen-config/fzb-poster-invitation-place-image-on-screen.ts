import { z } from "zod";


export const SCREEN_CONFIG_TYPE_POSTER_INVITATION_PLACE_IMAGE_ON_SCREEN = 'poster-invitation-place-image-on-screen';

export const FzbScreenConfigPosterInvitationPlaceImageOnScreenDataSchema = z.object({
  screenType: z.literal(SCREEN_CONFIG_TYPE_POSTER_INVITATION_PLACE_IMAGE_ON_SCREEN),
});


export type FzbScreenConfigPosterInvitationPlaceImageOnScreenData = z.infer<typeof FzbScreenConfigPosterInvitationPlaceImageOnScreenDataSchema>;