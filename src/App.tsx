import { RouterProvider } from 'react-router';
import { routes } from '@/Routes';
import { AccountProvider } from '@/Context/AccountContext';
import { MenuProvider } from '@/Context/MenuContext';

function App() {
  return (
    <AccountProvider>
      <MenuProvider>
        <RouterProvider router={routes} />
      </MenuProvider>
    </AccountProvider>
  )
}

export default App
