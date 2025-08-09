import { createBrowserRouter as JustTouchBrowser } from 'react-router';
import { Layout } from '@/Pages/Layout';
import { Gatekeeper } from '@/Pages/GateKeeper';
import { Account } from '@/Pages/Account/Account';


export const routes = JustTouchBrowser([
    {
        element: <Gatekeeper />,
        children: [
            {
                path: '/',
                element: <Layout><Account /></Layout>
            }
        ]
    }
])