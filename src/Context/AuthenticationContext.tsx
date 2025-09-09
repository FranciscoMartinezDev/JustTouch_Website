import type { Authentication } from '@/Models/Authentication';
import type { AuthenticationType } from '@/Models/Contexts/AuthenticationType';
import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import type { Session } from '@/Models/Session';
import { Users } from '@/Models/Users';
import { AccountService } from '@/Services/AccountService';
import { Storage } from '@/Store/Storage';
import { createContext, useContext, useState, type FC } from 'react';
import Cookie from 'js-cookie';
import type { Account } from '@/Models/Account';

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
    const [signing, setSigning] = useState<boolean>(false);
    const [signed, setSigned] = useState<boolean>(false);
    const accountService = AccountService.getInstance();
    const store = Storage.getInstance();

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
        setSigning(true);
        const result: Session | undefined = await accountService.Signin(user);
        if (result != undefined) {
            const auth: Authentication = result.Authentication!;
            const account: Account = result.Account!;
            Cookie.set('JT_Token', auth?.access_token!, { expires: auth?.expires_in });
            store.Set('token', auth.access_token);
            store.Set('Franchises', account.Franchises || []);
            if (account.Franchises.length === 1) {
                if (account.Franchises[0].Branches.length === 1) {
                    store.Set('branch_code', account.Franchises[0].Branches[0]);
                }
            }
            setSigning(false);
            setSigned(true);
        }
    }

    const SignOut = async () => {
        const result = await accountService.SignOut();
        if (result) {
            store.Dispose();
            Cookie.remove('JT_Token');
            window.location.href = '/sign-in';
        }
    }

    const SelectBusiness = (branchCode: string) => {
        store.Set('branch_code', branchCode);
        window.location.href = '/profile/menu';
    }

    const hasToken = (): boolean => {
        const token = Cookie.get('JT_Token');
        const storageToken = store.Get('token');
        return token !== undefined && storageToken !== undefined;
    }

    const twinToken = (): boolean => {
        const token = Cookie.get('JT_Token');
        const storageToken = store.Get('token');
        return storageToken === token;
    }


    return (
        <AuthenticationContext.Provider value={{ user, signing, signed, handleEmail, handlePassword, SignIn, SignOut, SelectBusiness, hasToken, twinToken }}>
            {children}
        </AuthenticationContext.Provider>
    )
}