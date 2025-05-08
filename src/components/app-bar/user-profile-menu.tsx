import { Box, Avatar, Menu, MenuItem, Collapse, Divider } from "@mui/material";
import { Link } from 'react-router';
import { KeyboardArrowDown } from "@mui/icons-material";
import { AllAdminUsersData, AllMessagePosterUsersData, updateInitialUserInStorage } from "~/data/demo-user-data/initial-user-data";
import { UserProfile } from "~/zod-types/demo-users/user-profile";
import { useDemoUserData } from "~/demo-content/demo-user-context";
import { useState } from "react";

interface UserProfileMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export const UserProfileMenu = ({ anchorEl, onClose }: UserProfileMenuProps) => {
  const [displayAdminsExpanded, setDisplayAdminsExpanded] = useState(false);
  const [postersExpanded, setPostersExpanded] = useState(false);
  const { profile, setUserData } = useDemoUserData();

  const setActiveUser = (userProfile: UserProfile) => {
    const userData = AllAdminUsersData.find(user => user.profile.id === userProfile.id) || 
                    AllMessagePosterUsersData.find(user => user.profile.id === userProfile.id);
    if (userData) {
      setUserData(userData);
      updateInitialUserInStorage(userData);
      onClose();
    }
  };

  const handleDisplayAdminsToggle = () => {
    setDisplayAdminsExpanded(!displayAdminsExpanded);
  };

  const handlePostersToggle = () => {
    setPostersExpanded(!postersExpanded);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box sx={{ px: 2, py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32 }} />
          <Box sx={{ fontWeight: 'medium' }}>
            {profile.name} - {profile.demoTitle}
          </Box>
        </Box>
      </Box>
      <Divider />
      <MenuItem disabled>
        <Link to="/assume-profile" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
          Assume User Profile
        </Link>
      </MenuItem>
      <MenuItem 
        onClick={handleDisplayAdminsToggle}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Display Admin
        <KeyboardArrowDown 
          sx={{ 
            transform: displayAdminsExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }} 
        />
      </MenuItem>
      <Collapse in={displayAdminsExpanded}>
        {AllAdminUsersData.map(user => (
          <MenuItem 
            key={user.profile.id}
            onClick={() => setActiveUser(user.profile)}
            sx={{ pl: 4 }}
          >
            {user.profile.name} - {user.profile.demoTitle}
          </MenuItem>
        ))}
      </Collapse>
      <MenuItem 
        onClick={handlePostersToggle}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Message Poster
        <KeyboardArrowDown 
          sx={{ 
            transform: postersExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }} 
        />
      </MenuItem>
      <Collapse in={postersExpanded}>
        {AllMessagePosterUsersData.map(user => (
          <MenuItem 
            key={user.profile.id}
            onClick={() => setActiveUser(user.profile)}
            sx={{ pl: 4 }}
          >
            {user.profile.name} - {user.profile.demoTitle}
          </MenuItem>
        ))}
      </Collapse>
    </Menu>
  );
}; 