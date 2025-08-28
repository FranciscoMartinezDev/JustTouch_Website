import { ValidateServiceRequest } from '@/Helpers/ValidateForm';
import { useCookie } from '@/Hooks/CookieHook';
import type { Authentication } from '@/Models/Authentication';
import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import type { ServiceRequestType } from '@/Models/Contexts/ServiceRequestType';
import { Users } from '@/Models/Users';
import { AccountService } from '@/Services/AccountService';
import { Storage } from '@/Store/Storage';
import { createContext, useContext, useState, type FC } from 'react';


const ServiceRequestContext = createContext<ServiceRequestType | undefined>(undefined);

export const useServiceRequestContext = (): ServiceRequestType => {
    const context = useContext(ServiceRequestContext);
    if (!context) {
        throw new Error('Service Request Context not provided!');
    }
    return context;
}

export const ServiceRequestProvider: FC<ContextChildren> = ({ children }) => {
    const [user, setUser] = useState<Users>(new Users());
    const accountService = AccountService.getInstance();
    const store = Storage.getInstance();
    const { Set } = useCookie();

    const handleEmail = (value: string) => {
        setUser(prev => {
            return { ...prev, Email: value };
        })
    }

    const HandleUserName = (value: string) => {
        setUser(prev => {
            return { ...prev, UserName: value };
        })
    }

    const newAccount = async () => {
        const validate = ValidateServiceRequest(user);
        if (validate) {
            const result = await accountService.AddAccount(user);
            if (result) {
                setTimeout(() => {
                    window.location.href = '';
                }, 2000);
            }
        }
    }

    const confirmEmail = async (email: string) => {
        const result: Authentication | undefined = await accountService.ConfirmEmail(email);
        if (result != undefined) {
            const auth: Authentication = result;
            Set(auth.access_token, 'JT_Token', auth.expires_in);
            store.Set<string>('token', auth.access_token!);
            window.location.href = '';
        }
    }

    
    return (
        <ServiceRequestContext.Provider value={{ user, handleEmail, HandleUserName, newAccount, confirmEmail }}>
            {children}
        </ServiceRequestContext.Provider>
    )
}