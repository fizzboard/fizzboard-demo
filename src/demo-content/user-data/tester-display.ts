import { UserData } from "~/components/user-context/user-data-context";


// const displayPostTesterConfigs: DemoBoardConfigData[] = [
//   {
//     id: "tester-display-demo-board-all-blank" as DemoBoardConfigId,
//     name: "All Blank",
//     description: "All screens are blank",
//     gridDimensionsId: "2x2" as GridDimensionId,
//     boardLocationSettingId: "bls-library" as BoardLocationSettingId,
//     allScreenSettings: _.range(0, 4).map(_ => ({
//       screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK,
//     })),  
//   },
//   {
//     id: "tester-board-admin-demo-board-all-image-links" as DemoBoardConfigId,
//     name: "All Permanent Image Links",
//     description: "All screens display a permanent image",
//     gridDimensionsId: "2x1" as GridDimensionId,
//     boardLocationSettingId: "bls-library" as BoardLocationSettingId,
//     allScreenSettings: _.range(0, 2).map(_ => ({
//       screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK,
//       imageUrl: "https://georgekarbusphotography.com/wp-content/uploads/2018/04/best_orca_killer_whale_underwater_photos.jpg",
//     })),
//   },
//   {
//     id: "tester-board-admin-demo-board-all-post-image-links" as DemoBoardConfigId,
//     name: "All Post Image Links",
//     description: "All screens display a link to a post image",
//     gridDimensionsId: "2x2" as GridDimensionId,
//     boardLocationSettingId: "bls-library" as BoardLocationSettingId,
//     allScreenSettings: _.range(0, 4).map(_ => ({
//       screenType: SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK,
//       imageUrl: "https://georgekarbusphotography.com/wp-content/uploads/2018/04/best_orca_killer_whale_underwater_photos.jpg",
//     })),
//   },
// ]

// const displayPostTesterBoards: UserBoard[] = displayPostTesterConfigs.map(boardConfig => 
//   mapDemoBoardConfigToUserBoard(boardConfig));


export const DisplayPostTesterData: UserData = {
  profile: {
    id: "demo-display-post-tester",
    name: "Zoe Poster",
    demoRole: "MessagePoster",
    demoTitle: "Zoe T Poster",
  },
  posts: [],
  boards: [],
  demoBoardConfigs: [],
  screens: [],
}
