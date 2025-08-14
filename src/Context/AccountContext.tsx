import { createContext, useContext, useState, type FC } from 'react';
import type { AccountType } from '@/Models/Contexts/AccountType';
import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import type { Account } from '@/Models/Account';

const AccountContext = createContext<AccountType | undefined>(undefined);

export const useAccountContext = (): AccountType => {
    const context = useContext(AccountContext);
    if (!context) throw new Error('Account context not provided!');
    return context;
}


export const AccountProvider: FC<ContextChildren> = ({ children }) => {
    const [account, setAccount] = useState<Account | null>(null);
    
    const handler = (callback: () => Account) => {
        setAccount(callback);
    }

    return (
        <AccountContext.Provider value={{ account, handler }}>
            {children}
        </AccountContext.Provider>
    )
}