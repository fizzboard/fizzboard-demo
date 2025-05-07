import { FzbScreenConfigType } from "~/zod-types/branded-strings"
import { SCREEN_CONFIG_TYPE_POSTER_INVITATION_ADD_IMAGE_TO_BOARD_IMAGE_POOL } from "~/zod-types/screen-config/fzb-poster-invitation-add-image-to-board-image-pool"
import { SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE } from "~/zod-types/screen-config/fzb-poster-placed-screen-image"
import { FzbScreenConfigData } from "~/zod-types/screen-config/fzb-screen-config"
import { SCREEN_CONFIG_TYPE_SHOW_IMAGE_FROM_BOARD_IMAGE_POOL } from "~/zod-types/screen-config/fzb-show-image-from-board-image-pool"
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK } from "~/zod-types/screen-config/fzb-show-permanent-blank"
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK } from "~/zod-types/screen-config/fzb-show-permanent-image"


export const createDefaultScreenSettingsData = (screenType: FzbScreenConfigType): FzbScreenConfigData => {
  switch (screenType) {
    case SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK:
      return {
        screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK,
        imageUrl: "https://georgekarbusphotography.com/wp-content/uploads/2018/04/best_orca_killer_whale_underwater_photos.jpg",
      }
    case SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK:
      return {
        screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK,
      }
    case SCREEN_CONFIG_TYPE_SHOW_IMAGE_FROM_BOARD_IMAGE_POOL:
      return {
        screenType: SCREEN_CONFIG_TYPE_SHOW_IMAGE_FROM_BOARD_IMAGE_POOL,
      }
    case SCREEN_CONFIG_TYPE_POSTER_INVITATION_ADD_IMAGE_TO_BOARD_IMAGE_POOL:
      return {
        screenType: SCREEN_CONFIG_TYPE_POSTER_INVITATION_ADD_IMAGE_TO_BOARD_IMAGE_POOL,
      }
    case SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE:
      return {
        screenType: SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE,
      }
    default:
      throw new Error(`Unsupported screen type: ${screenType}`)
  }
}