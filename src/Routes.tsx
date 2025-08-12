import { createBrowserRouter as JustTouchBrowser } from 'react-router';
import { Layout } from '@/Pages/Layout';
import { Gatekeeper } from '@/Pages/Gatekeeper';
import { Account } from '@/Pages/Account/Account';
import { Menu } from '@/Pages/Menu/Menu';
import { MenuInfo } from '@/Pages/Menu/MenuInfo';
import { ServiceRequest } from '@/Pages/ServiceRequest/ServiceRequest';
import { MessageRequested } from '@/Pages/ServiceRequest/MessageRequested';
import { ConfirmAccount } from '@/Pages/ServiceRequest/ConfirmAccount';

export const routes = JustTouchBrowser([
    {
        element: <Gatekeeper />,
        children: [
            {
                path: '/',
                element: <Layout><Menu /></Layout>
            }
        ]
    }
])