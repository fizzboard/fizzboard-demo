import { FizzBoardAppBar } from '../app-bar/app-bar';
import { Box } from '@mui/material';
import { APP_BAR_HEIGHT } from '../app-bar/app-bar';


export const FizzBoardAppFrame = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <FizzBoardAppBar />
      <Box 
        sx={{
          width: '100%',
          margin: '0 auto',
          paddingTop: '80px',
          height: `calc(100vh - ${APP_BAR_HEIGHT})`,
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
    </>
  );
}
