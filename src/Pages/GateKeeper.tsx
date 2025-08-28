import { useCookie } from "@/Hooks/CookieHook";
import { Storage } from "@/Store/Storage";
import type { FC } from "react";
import { Outlet, Navigate } from 'react-router';

export const Gatekeeper: FC = () => {
    const store = Storage.getInstance();
    const { Get } = useCookie();
    
    const branch = store.Get<string>('branch_code');
    const token = Get<string>('JT_Token')
    const storageToken = store.Get('token');

    if (true) {
        return <Outlet />
    }
    return <Navigate to={'/'} />
}