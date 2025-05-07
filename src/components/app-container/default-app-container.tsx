import { Box } from "@mui/material"

interface DefaultAppContainerProps {
  children: React.ReactNode;
  flexDirection?: string;
}

export const DefaultAppContainer = ({ children, flexDirection, ...props }: DefaultAppContainerProps) => {
  return (
    <Box sx={{ 
      maxWidth: 600, 
      minWidth: 400,
      mx: "auto", 
      p: 3,
      display: 'flex',
      flexDirection: flexDirection || 'column',
      overflowY: 'auto',
      height: '100%',
      ...props,
    }}>
      {children}
    </Box>
  )
}