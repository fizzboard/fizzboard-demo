import { Box } from "@mui/material"


export const FullScreenContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <Box 
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      {children}
    </Box>
  )
}