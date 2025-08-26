import { RouterProvider } from 'react-router';
import { routes } from '@/Routes';
import { AccountProvider } from '@/Context/AccountContext';
import { MenuProvider } from '@/Context/MenuContext';
import { ServiceRequestProvider } from '@/Context/ServiceRequestContext';

function App() {
  return (
    <ServiceRequestProvider>
      <AccountProvider>
        <MenuProvider>
          <RouterProvider router={routes} />
        </MenuProvider>
      </AccountProvider>
    </ServiceRequestProvider>
  )
}

export default App
