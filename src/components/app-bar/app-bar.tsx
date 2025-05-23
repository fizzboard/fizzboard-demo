import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText, Avatar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { AppBar } from "@mui/material";
import { Link } from 'react-router';
import { HorizontalCenteredFlexContainerDiv, HorizontalSpacerDiv } from "../common-divs";
import logoUrl from "../../logo/fizzboard-logo.svg";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FzbMenuIcon } from "../../styling/icons";
import { UserProfileMenu } from "./user-profile-menu";

const APP_BAR_TEXT_ITEM_BACKGROUND_COLOR = "#F0F0F0";
const APP_BAR_TEXT_ITEM_TEXT_COLOR = "#3C3C3C";
export const APP_BAR_HEIGHT = '64px';

const ButtonLinkStyle = {
  textDecoration: 'none',
  color: APP_BAR_TEXT_ITEM_TEXT_COLOR,
  backgroundColor: APP_BAR_TEXT_ITEM_BACKGROUND_COLOR,
  padding: "3px",
  paddingLeft: "6px",
  paddingRight: "6px",
  borderRadius: "8px",    
}

export const FizzBoardAppBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'My Posts', path: '/my-posts' },
    { text: 'My Boards', path: '/my-boards' },
    { text: 'Choose Profile', path: '/choose-profile' },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          key={item.text}
          component={Link}
          to={item.path}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar 
        position="fixed"
        sx={{
          background: "purple",
          width: '100%',
          height: APP_BAR_HEIGHT,
          left: 0,
          right: 0,
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <FzbMenuIcon />
            </IconButton>
          )}
          <div style={{
            ...ButtonLinkStyle,
            fontWeight: 'bold', 
          }}
          >
            <Link to="/" style={{
              textDecoration: 'none',
            }}>
            <div style={{
              color: APP_BAR_TEXT_ITEM_TEXT_COLOR,
              opacity: 1.0,
            }}>
              <HorizontalCenteredFlexContainerDiv>
                <img src={logoUrl} alt="Logo" style={{ width: '24px', height: '24px' }} />
                <HorizontalSpacerDiv width={5} />
                <div style={{
                  fontSize: "24px",
                }}>
                  FizzBoard
                </div>
              </HorizontalCenteredFlexContainerDiv>
              </div>
            </Link>
          </div>
          <div style={{ flexGrow: 1 }} />

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link to={"/my-boards"} style={{
                textDecoration: 'none',
              }}>
                <Button color="inherit"
                  sx={{
                    ...ButtonLinkStyle,
                  }}>My Boards</Button>
              </Link>

              <Link to={"/my-posts"} style={{
                textDecoration: 'none',
              }}>
                <Button color="inherit"
                  sx={{
                    ...ButtonLinkStyle,
                  }}>My Posts</Button>
              </Link>

              <IconButton
                onClick={handleMenuOpen}
                sx={{
                  ...ButtonLinkStyle,
                  padding: '3px',
                  height: '36px',
                  width: '36px',
                }}
              >
                <Avatar sx={{ width: 30, height: 30 }} />
              </IconButton>

              <UserProfileMenu 
                anchorEl={anchorEl}
                onClose={handleMenuClose}
              />

              <HorizontalSpacerDiv width={5} />
            </Box>
          )}

        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
