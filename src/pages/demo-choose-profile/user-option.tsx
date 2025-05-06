import { Button } from "@mui/material";
import { UserProfile } from "~/zod-types/demo-users/user-profile";


interface UserOptionProps {
  user: UserProfile;
  activeUser: UserProfile;
  setActiveUser: (user: UserProfile) => void;
}


export const UserOption = ({ user, activeUser, setActiveUser }: UserOptionProps) => {
  if (user.id === activeUser.id) {
    return (
      <Button variant="contained" onClick={() => setActiveUser(user)}>
        {user.demoTitle}
      </Button>
    );
  }

  return (
    <Button variant="outlined" onClick={() => setActiveUser(user)}>
      {user.demoTitle}
    </Button>
  )
}
