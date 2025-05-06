import { z } from "zod";


export const SCREEN_CONFIG_TYPE_SHOW_IMAGE_FROM_BOARD_IMAGE_POOL = 'show-image-from-board-image-pool';

export const FzbScreenConfigShowImageFromBoardImagePoolDataSchema = z.object({
  screenType: z.literal(SCREEN_CONFIG_TYPE_SHOW_IMAGE_FROM_BOARD_IMAGE_POOL),
});


export type FzbScreenConfigShowImageFromBoardImagePoolData = z.infer<typeof FzbScreenConfigShowImageFromBoardImagePoolDataSchema>;