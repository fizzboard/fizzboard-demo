import { createContext, useContext, useState, ReactNode } from 'react';
import { UserData, UserDataContextType } from '~/components/user-context/user-data-context';
import { UserProfile } from '~/zod-types/demo-users/user-profile';
import { UserPost } from '~/zod-types/demo-users/user-post';
import { UserBoard } from '~/zod-types/demo-users/user-board';
import { UserScreen } from '~/zod-types/demo-users/user-screen';
import { DemoBoardConfigData } from '~/zod-types/demo-users/demo-board-config-data';


interface DemoUserDataProviderProps {
  initialUserData: UserData;

  children: ReactNode;
}


const DemoUserDataContext = createContext<UserDataContextType | undefined>(undefined);


export const DemoUserDataProvider = ({ children, initialUserData }: DemoUserDataProviderProps) => {
  const [profile, setProfile] = useState<UserProfile>(initialUserData.profile);
  const [posts, setPosts] = useState<UserPost[]>(initialUserData.posts);
  const [boards, setBoards] = useState<UserBoard[]>(initialUserData.boards);
  const [screens, setScreens] = useState<UserScreen[]>(initialUserData.screens);
  const [demoBoardConfigs, setDemoBoardConfigs] = useState<DemoBoardConfigData[]>(initialUserData.demoBoardConfigs);

  const setUserData = (userData: UserData) => {
    console.log("CTX SETTING USER DATA", userData);
    setProfile(userData.profile);
    setPosts(userData.posts);
    setBoards(userData.boards);
    setScreens(userData.screens);
    setDemoBoardConfigs(userData.demoBoardConfigs);
  }

  return (
    <DemoUserDataContext.Provider value={{
      profile,
      posts,
      boards,
      screens,
      demoBoardConfigs,
      setUserData,
    }}>
      {children}
    </DemoUserDataContext.Provider>
  );
}


export const useDemoUserData = (): UserDataContextType => {
  const context = useContext(DemoUserDataContext);
  if (context === undefined) {
    throw new Error('useDemoUserData must be used within a DemoUserDataProvider');
  }
  return context;
}
