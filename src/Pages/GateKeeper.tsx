import { useCookie } from "@/Hooks/CookieHook";
import { Storage } from "@/Store/Storage";
import type { FC } from "react";
import { Outlet, Navigate } from 'react-router';

export const Gatekeeper: FC = () => {
    const store = Storage.getInstance();
    const { Get, Remove } = useCookie();
    const branch = store.Get<string>('branch_code');

    const token = Get<string>('JT_Token')
    const storageToken = store.Get('token');

    if (!token || !branch) {
        Remove('JT_Token');
        store.Dispose();
        return <Navigate to={'/sign-in'} />
    }

    if (storageToken !== token) {
        Remove('JT_Token');
        store.Dispose();
        return <Navigate to={'/sign-in'} />
    }

    return <Outlet />
}