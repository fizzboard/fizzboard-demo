import { Box, Typography } from "@mui/material";
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame";


export const LandingNotesAndFodderPage = () => {
  return (
    <FizzBoardAppFrame>
      <title>FizzBoard Demo</title>

      <Box sx={{ maxWidth: 600, mx: "auto", p: 3, }}>
        <Typography variant="h4" component="h1" gutterBottom>
          FizzBoard Demo
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Host A Vibe
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Post A Vibe
        </Typography>

        <Typography variant="h6" component="h1" gutterBottom>
          Place-based digital signage for your community
        </Typography>

        <Typography variant="h6" component="h1" gutterBottom>
          Increase a sense of community wherever you host this screen
        </Typography>

        <Typography variant="h6" component="h1" gutterBottom>
          Passersby claim screen space to post messages, pictures, and good vibes
        </Typography>


        <ul>
          <li>Birthday wishes</li>
          <li>Announcements</li>
          <li>Congratulatory messages</li>
          <li>Kudos</li>
          <li>Pictures</li>
          <li>Memes</li>
          <li>Items for sale/marketplace</li>
          <li>Items to trade</li>
          <li>Items to borrow</li>
          <li>Items to give away</li>
          <li>Recommendations</li>
          <li>Requests for recommendations</li>
          <li>And more!</li>

        </ul>

      </Box>
    </FizzBoardAppFrame>
  )
}