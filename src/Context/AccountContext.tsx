import { createContext, useContext, useState, type FC } from 'react';
import type { AccountType } from '@/Models/Contexts/AccountType';
import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import { Account } from '@/Models/Account';
import { Franchise } from '@/Models/Franchise';
import { Branches } from '@/Models/Branches';

const AccountContext = createContext<AccountType | undefined>(undefined);

export const useAccountContext = (): AccountType => {
    const context = useContext(AccountContext);
    if (!context) throw new Error('Account context not provided!');
    return context;
}

export const AccountProvider: FC<ContextChildren> = ({ children }) => {
    const [account, setAccount] = useState<Account>(new Account());

    const Initialize = () => {
        setAccount(prev => {
            if (prev.Franchises.length === 0) {
                const newFranchise = new Franchise();
                newFranchise.Branches.push(new Branches())
                return { ...prev, Franchises: [...prev.Franchises, newFranchise] }
            }
            return prev;
        })
    }

    const handler = (callback: (prev: Account) => Account) => {
        setAccount(prev => callback(prev));
    }

    const SaveChange = () => {
        console.log(account)
    }

    return (
        <AccountContext.Provider value={{ account, handler, Initialize, SaveChange }}>
            {children}
        </AccountContext.Provider>
    )
}