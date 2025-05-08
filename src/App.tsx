import { DemoUserDataProvider } from './demo-content/demo-user-context'
import { FizzboardRoutes } from './routes'
import { initialUserData } from './data/demo-user-data/initial-user-data'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const FizzboardApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <DemoUserDataProvider
        initialUserData={initialUserData}
      >
        <FizzboardRoutes />
      </DemoUserDataProvider>
    </ThemeProvider>
  )
}
