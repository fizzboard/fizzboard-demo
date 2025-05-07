import { useDemoUserData } from '~/demo-content/demo-user-context';
import { UserProfile } from '~/zod-types/demo-users/user-profile';
import { UserBoard } from '~/zod-types/demo-users/user-board';
import { UserScreen } from '~/zod-types/demo-users/user-screen';
import { DemoBoardConfigData } from '~/zod-types/demo-users/demo-board-config-data';
import { FzbPostData } from '~/zod-types/posts/fzb-post';


export interface UserData {
  profile: UserProfile;
  posts: FzbPostData[];
  boards: UserBoard[];
  screens: UserScreen[];
  demoBoardConfigs: DemoBoardConfigData[];
}

export interface UserDataContextType extends UserData {
  setUserData: (userData: UserData) => void;
}


export const useUserData = () => {
  const context = useDemoUserData();
  return context;
}
