import { Box, Typography, Paper, Tabs, Tab } from "@mui/material"
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame"
import { useDemoUserData } from "~/demo-content/demo-user-context";
import { useState } from "react";
import { DemoProfileRole, UserProfile } from "~/zod-types/demo-users/user-profile";
import { TradeShowVendorData } from "~/demo-content/user-data/trade-show-vendor";
import { LibrarianAdminData } from "~/demo-content/user-data/librarian";
import { CorporateHrAdminData } from "~/demo-content/user-data/hr-corporate";
import { TradeShowOrganizerScreenAdminData } from "~/demo-content/user-data/trade-show-organizer";
import { ProudParentData } from "~/demo-content/user-data/proud-parent";
import { TeamLeadCorporateData } from "~/demo-content/user-data/team-lead-corporate";
import { UserOption } from "./user-option";


const AllDemoUsersData = [
  TradeShowVendorData,
  TeamLeadCorporateData,
  ProudParentData,
  TradeShowOrganizerScreenAdminData,
  CorporateHrAdminData,
  LibrarianAdminData,
]

const AllAdminUsersData = Object.values(AllDemoUsersData)
  .filter(user => user.profile.demoRole === "DisplayAdmin")
  .sort((a, b) => a.profile.name.localeCompare(b.profile.name));

const AllMessagePosterUsersData = Object.values(AllDemoUsersData)
  .filter(user => user.profile.demoRole === "MessagePoster")
  .sort((a, b) => a.profile.name.localeCompare(b.profile.name));


export const DemoChooseProfilePage = () => {
  const { profile, setUserData } = useDemoUserData();

  const [tabValue, setTabValue] = useState<DemoProfileRole>(profile.demoRole);
  console.log("TAB VALUE", tabValue);
  console.log("PROFILE", profile);

  const setActiveUser = (userProfile: UserProfile) => {
    console.log("SETTING ACTIVE USER", userProfile);
    const userData = AllDemoUsersData.find(user => user.profile.id === userProfile.id);
    console.log("USER DATA", userData);
    if (userData) {
      setUserData(userData);
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
