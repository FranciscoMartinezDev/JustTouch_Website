import { createBrowserRouter as JustTouchBrowser, Navigate } from 'react-router';
import { Layout } from '@/Pages/Layout';
import { Gatekeeper } from '@/Pages/Gatekeeper';
import { Account } from '@/Pages/Account/Account';
import { Menu } from '@/Pages/Menu/Menu';
import { MenuInfo } from '@/Pages/Menu/MenuInfo';
import { ServiceRequest } from '@/Pages/ServiceRequest/ServiceRequest';
import { MessageRequested } from '@/Pages/ServiceRequest/MessageRequested';
import { ConfirmAccount } from '@/Pages/ServiceRequest/ConfirmAccount';
import { Signin } from '@/Pages/Account/SignIn';


export const routes = JustTouchBrowser([
    {
        path: '/Welcome/:email',
        element: <ConfirmAccount />
    },
    {
        path: '/confirmation-email',
        element: <MessageRequested />
    },
    {
        path: '/service-request',
        element: <ServiceRequest />
    },
    {
        path: '/sign-in',
        element: <Signin />
    },
    {
        element: <Gatekeeper />,
        children: [
            {
                path: '/',
                element: <Navigate to={'/sign-in'}/>
            },
            {
                path: '/profile/account',
                element: <Layout><Account /></Layout>
            },
            {
                path: '/profile/menu',
                element: <Layout><Menu /></Layout>
            },
            {
                path: '/profile/new-product-group',
                element: <Layout><MenuInfo /></Layout>
            },
            {
                path: '/profile/edit-product-group/:catalogKey',
                element: <Layout><MenuInfo /></Layout>
            }
        ]
    }
])