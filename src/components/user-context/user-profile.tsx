// import { createContext, useContext, useState, ReactNode } from 'react';
// import { UserProfile } from '~/zod-types/demo-users/user-profile';


// interface UserProfileContextType {
//   user: UserProfile | null;
//   setUser: (user: UserProfile | null) => void;
// }

// // Create the context with a default value
// // const UserContext = createContext<UserProfileContextType | undefined>(undefined);

// // Create a provider component
// interface UserProfileProviderProps {
//   children: ReactNode;
// }

// // export const UserProfileProvider = ({ children }: UserProfileProviderProps) => {
// //   const [user, setUser] = useState<UserProfile | null>(null);

// //   return (
// //     <UserContext.Provider value={{ user, setUser }}>
// //       {children}
// //     </UserContext.Provider>
// //   );
// // }

// // // Create a custom hook to use the user context
// // export const useDemoUser = () => {
// //   const context = useContext(UserContext);
// //   if (context === undefined) {
// //     throw new Error('useUser must be used within a UserProvider');
// //   }
// //   return context;
// // }
