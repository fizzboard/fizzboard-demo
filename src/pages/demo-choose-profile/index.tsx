import { Box, Typography, Paper, Tabs, Tab } from "@mui/material"
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame"
import { useDemoUserData } from "~/demo-content/demo-user-context";
import { useState } from "react";
import { DemoProfileRole, UserProfile } from "~/zod-types/demo-users/user-profile";
import { UserOption } from "./user-option";
import { AllAdminUsersData, AllDemoUsersData, AllMessagePosterUsersData, updateInitialUserInStorage } from "~/data/demo-user-data/initial-user-data";


export const DemoChooseProfilePage = () => {
  const { profile, setUserData } = useDemoUserData();

  const [tabValue, setTabValue] = useState<DemoProfileRole>(profile.demoRole);

  const setActiveUser = (userProfile: UserProfile) => {
    const userData = AllDemoUsersData.find(user => user.profile.id === userProfile.id);

    if (userData) {
      setUserData(userData);
      updateInitialUserInStorage(userData);
    } else {
      console.log("NO USER DATA FOUND");
    }
  }

  const handleTabChange = (_event: React.SyntheticEvent, newValue: DemoProfileRole) => {
    setTabValue(newValue);
  };

  return (
    <FizzBoardAppFrame>
      <title>FizzBoard Demo - Choose Profile</title>
      <Box sx={{
        // width: 800,
        mx: "auto",
        p: 3
      }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Assume User Profile
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {profile.name} - {profile.demoTitle}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="profile tabs">
              <Tab label="Display Admin" value="DisplayAdmin" />
              <Tab label="Message Poster" value="MessagePoster" />
            </Tabs>
          </Box>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2, width: 400, }}>
            {tabValue === "DisplayAdmin" && (
              <Paper elevation={2} sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {AllAdminUsersData.map(user => (
                    <UserOption
                      key={user.profile.id}
                      user={user.profile}
                      activeUser={profile}
                      setActiveUser={setActiveUser}
                      />
                  ))}
                </Box>
              </Paper>
            )}
            {tabValue === "MessagePoster" && (
              <Paper elevation={2} sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {AllMessagePosterUsersData.map(user => (
                    <UserOption
                      key={user.profile.id}
                      user={user.profile}
                      activeUser={profile}
                      setActiveUser={setActiveUser}
                      />
                  ))}
                </Box>
              </Paper>
            )}
          </Box>
        </Box>
      </Box>
    </FizzBoardAppFrame>
  );
}
