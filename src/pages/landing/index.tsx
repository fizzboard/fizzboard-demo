import { Box, Typography } from "@mui/material";
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame";


export const LandingPage = () => {
  return (
    <FizzBoardAppFrame>
      <title>FizzBoard Demo</title>

      <Box sx={{ maxWidth: 600, mx: "auto", p: 3, }}>
        <Typography variant="h4" component="h1" gutterBottom>
          FizzBoard Demo
        </Typography>
      </Box>
    </FizzBoardAppFrame>
  )
}