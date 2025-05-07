import { DemoUserDataProvider } from './demo-content/demo-user-context'
import { FizzboardRoutes } from './routes'
import { initialUserData } from './data/demo-user-data/initial-user-data'


export const FizzboardApp = () => {
  return (
    <DemoUserDataProvider
      initialUserData={initialUserData}
    >
      <FizzboardRoutes />
    </DemoUserDataProvider>
  )
}
