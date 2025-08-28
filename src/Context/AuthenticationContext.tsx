import { useCookie } from '@/Hooks/CookieHook';
import type { Account } from '@/Models/Account';
import type { Authentication } from '@/Models/Authentication';
import type { AuthenticationType } from '@/Models/Contexts/AuthenticationType';
import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import type { Franchise } from '@/Models/Franchise';
import type { Session } from '@/Models/Session';
import { Users } from '@/Models/Users';
import { AccountService } from '@/Services/AccountService';
import { Storage } from '@/Store/Storage';
import { createContext, useContext, useState, type FC } from 'react';


const AuthenticationContext = createContext<AuthenticationType | undefined>(undefined);


export const useAuthenticationContext = (): AuthenticationType => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('Authentication Context not provided!');
    }
    return context;
}


export const AuthenticationProvider: FC<ContextChildren> = ({ children }) => {
    const [user, setUser] = useState<Users>(new Users());
    const [Business, setBusiness] = useState<Franchise[]>([]);

    const accountService = AccountService.getInstance();
    const store = Storage.getInstance();
    const { Set } = useCookie();

    const handleEmail = (value: string) => {
        setUser(prev => {
            return { ...prev, Email: value };
        })
    }

    const handlePassword = (value: string) => {
        setUser(prev => {
            return { ...prev, Password: value };
        })
    }

    const SignIn = async () => {
        const result: Session | undefined = await accountService.Signin(user);

        if (result != undefined) {
            const auth: Authentication = result.Authentication!;
            const account: Account = result.Account!;

            Set(auth?.access_token, 'JT_Token', auth?.expires_in);
            store.Set('token', auth.access_token);

            if (account.Franchises == undefined) {
                window.location.href = '';
                return;
            }
            setBusiness(account.Franchises);
        }
    }

    const SelectBusiness = (branchCode: string) => {
        store.Set('branch_code', branchCode);
        window.location.href = '';
    }


    return (
        <AuthenticationContext.Provider value={{ Business, handleEmail, handlePassword, SignIn, SelectBusiness }}>
            {children}
        </AuthenticationContext.Provider>
    )
}