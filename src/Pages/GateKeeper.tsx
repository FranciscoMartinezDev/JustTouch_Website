import { Franchise } from "@/Models/Franchise";
import { Storage } from "@/Store/Storage";
import { type FC } from "react";
import { Navigate, Outlet } from 'react-router';
import Cookie from 'js-cookie';
import { useAuthenticationContext } from "@/Context/AuthenticationContext";

export const Gatekeeper: FC = () => {
    const { hasToken, twinToken } = useAuthenticationContext();
    const store = Storage.getInstance();
    const branch = store.Get<string>('branch_code');
    const franchises: Franchise[] = store.Get('Franchises') || [];
    const token = hasToken();
    const twin = twinToken();
    console.log(!branch && franchises.length > 0)

    if (!token) {
        store.Dispose();
        Cookie.remove('JT_Token');

        if (location.pathname !== '/sign-in') {
            return <Navigate to={'/sign-in'} />;
        }
    } else if (token && !twinToken) {
        store.Dispose();
        Cookie.remove('JT_Token');

        if (location.pathname !== '/sign-in') {
            return <Navigate to={'/sign-in'} />;
        }
    } else if (token && twin) {
        if (!branch && franchises.length > 0) {
            if (location.pathname !== '/sign-in') {
                return <Navigate to={'/sign-in'} />;
            }
        }
    }

    return <Outlet />
}