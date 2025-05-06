import { FzbScreenConfigType } from "~/zod-types/branded-strings"
import { FzbScreenConfigData } from "~/zod-types/screen-config/fzb-screen-config"


export const createDefaultScreenSettingsData = (screenType: FzbScreenConfigType): FzbScreenConfigData => {
  switch (screenType) {
    case "show-permanent-image-link":
      return {
        screenType: "show-permanent-image-link",
        imageUrl: "https://georgekarbusphotography.com/wp-content/uploads/2018/04/best_orca_killer_whale_underwater_photos.jpg",
      }
    case "show-permanent-blank":
      return {
        screenType: "show-permanent-blank",
      }
    case "show-image-from-board-image-pool":
      return {
        screenType: "show-image-from-board-image-pool",
      }
    case "poster-invitation-add-image-to-board-image-pool":
      return {
        screenType: "poster-invitation-add-image-to-board-image-pool",
      }
    case "poster-invitation-place-image-on-screen":
      return {
        screenType: "poster-invitation-place-image-on-screen",
      }
    default:
      throw new Error(`Unsupported screen type: ${screenType}`)
  }
}