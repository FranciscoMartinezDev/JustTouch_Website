import type { FC } from "react";
import { Outlet, Navigate } from 'react-router';

export const Gatekeeper: FC = () => {
    if (true) {
        return <Outlet />
    }
    return <Navigate to={'/'}/>
}