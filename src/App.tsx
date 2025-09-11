import { RouterProvider } from 'react-router';
import { routes } from '@/Routes';
import { AccountProvider } from '@/Context/AccountContext';
import { MenuProvider } from '@/Context/MenuContext';
import { ServiceRequestProvider } from '@/Context/ServiceRequestContext';
import { AuthenticationProvider } from '@/Context/AuthenticationContext';

function App() {
  return (
    <AccountProvider>
      <AuthenticationProvider>
        <ServiceRequestProvider>
          <MenuProvider>
            <RouterProvider router={routes} />
          </MenuProvider>
        </ServiceRequestProvider>
      </AuthenticationProvider>
    </AccountProvider>
  )
}

export default App
