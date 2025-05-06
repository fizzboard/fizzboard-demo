import { Box } from "@mui/material"


export const DefaultAppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ 
      maxWidth: 600, 
      minWidth: 400,
      mx: "auto", 
      p: 3 
    }}>
      {children}
    </Box>
  )
}