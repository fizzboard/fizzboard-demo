import { Box, Typography } from "@mui/material";


export const ScreenContentPermanentBlank = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}>
      <Typography variant="h6">This screen is intentionally blank</Typography>
    </Box>
  );
};
