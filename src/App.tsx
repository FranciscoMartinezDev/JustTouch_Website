import { RouterProvider } from 'react-router';
import { routes } from '@/Routes';
import { AccountProvider } from '@/Context/AccountContext';
import { MenuProvider } from '@/Context/MenuContext';
import { ServiceRequestProvider } from '@/Context/ServiceRequestContext';
import { AuthenticationProvider } from '@/Context/AuthenticationContext';

function App() {
  return (
    <AuthenticationProvider>
      <ServiceRequestProvider>
        <AccountProvider>
          <MenuProvider>
              <RouterProvider router={routes} />
          </MenuProvider>
        </AccountProvider>
      </ServiceRequestProvider>
    </AuthenticationProvider>
  )
}

export default App
