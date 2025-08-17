import { RouterProvider } from 'react-router';
import { routes } from '@/Routes';
import { AccountProvider } from '@/Context/AccountContext';


function App() {
  return (
    <AccountProvider>
      <RouterProvider router={routes} />
    </AccountProvider>
  )
}

export default App
