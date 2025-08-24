import { createContext, useContext, useState, type FC } from 'react';
import type { AccountType } from '@/Models/Contexts/AccountType';
import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import { Account } from '@/Models/Account';
import { Franchise } from '@/Models/Franchise';
import { Branches } from '@/Models/Branches';
import { AccountService } from '@/Services/AccountService';
import { ValidateAccountForm } from '@/Helpers/ValidateForm';
import { generateRandomString } from "ts-randomstring/lib"

const AccountContext = createContext<AccountType | undefined>(undefined);

export const useAccountContext = (): AccountType => {
    const context = useContext(AccountContext);
    if (!context) throw new Error('Account context not provided!');
    return context;
}

export const AccountProvider: FC<ContextChildren> = ({ children }) => {
    const [account, setAccount] = useState<Account>(new Account());
    const service: AccountService = AccountService.getInstance();

    const Initialize = () => {
        setAccount(prev => {
            if (prev.Franchises.length === 0) {
                const franchiseCode = generateRandomString({ length: 10 });
                const branchCode = generateRandomString({ length: 10 });

                const newFranchise = new Franchise({ FranchiseCode: franchiseCode });
                newFranchise.Branches.push(new Branches({ BranchCode: branchCode }));
                return { ...prev, Franchises: [...prev.Franchises, newFranchise] }
            }
            return prev;
        })
    }

    const handler = (callback: (prev: Account) => Account) => {
        setAccount(prev => callback(prev));
    }

    const SaveChange = async () => {
        const validate = ValidateAccountForm(account);
        if (validate) {
            const result = await service.UpdateAccount(account);
            if (result) {
                //completar con otra logica
                setTimeout(() => {
                    window.location.href = ''
                }, 2000);
            }
        }
    }

    return (
        <AccountContext.Provider value={{ account, handler, Initialize, SaveChange }}>
            {children}
        </AccountContext.Provider>
    )
}