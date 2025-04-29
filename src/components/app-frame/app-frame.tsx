import { FizzBoardAppBar } from '../app-bar/app-bar';
import { Box } from '@mui/material';


export const FizzBoardAppFrame = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <FizzBoardAppBar />
      <Box 
        sx={{ 
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '16px',
          paddingTop: '80px',
        }}
      >
        {children}
      </Box>
    </>
  );
}
