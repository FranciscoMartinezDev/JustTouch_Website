import { createBrowserRouter as JustTouchBrowser } from 'react-router';
import Layout from './Pages/Layout';


export const routes = JustTouchBrowser([
    {
        path: '/',
        element: <Layout />
    },
])