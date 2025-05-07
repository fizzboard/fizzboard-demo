import { Box, Paper, Tab, Tabs } from "@mui/material"
import { Typography } from "@mui/material"
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame"
import { useDemoUserData } from "~/demo-content/demo-user-context";
import { useState } from "react";
import { MyBoardItem } from "./board-launch-button";


type TabValue = "new-board" | "my-boards";

export const DemoMyBoardsPage = () => {

  const { boards } = useDemoUserData();

  const [tabValue, setTabValue] = useState<TabValue>("my-boards");

  const handleTabChange = (_event: React.SyntheticEvent, newValue: TabValue) => {
    setTabValue(newValue);
  };

  const myBoards = boards;

  
  return (
    <FizzBoardAppFrame>
      <title>FizzBoard Demo - My Boards</title>
      <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h4" sx={{ mb: 4 }}>
            My Boards
          </Typography>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleTabChange} aria-label="profile tabs">
                <Tab label="New Board" value="new-board" />
                <Tab label="My Boards" value="my-boards" />
              </Tabs>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2, width: 400, }}>
              {tabValue === "new-board" && (
                <Paper elevation={2} sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    New Board
                  </Box>
                </Paper>
              )}
              {tabValue === "my-boards" && (
                <Paper elevation={2} sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {myBoards.map(board => (
                      <MyBoardItem 
                        key={board.id}
                        board={board} 
                      />
                    ))}
                  </Box>
                </Paper>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </FizzBoardAppFrame>
  );
};
