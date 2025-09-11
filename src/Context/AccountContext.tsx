import { createContext, useContext, useState, type FC } from 'react';
import type { AccountType } from '@/Models/Contexts/AccountType';
import type { ContextChildren } from '@/Models/Contexts/ContextChildren';
import { Account } from '@/Models/Account';
import { Franchise } from '@/Models/Franchise';
import { AccountService } from '@/Services/AccountService';
import { ValidateAccountForm } from '@/Helpers/ValidateForm';
import { Storage } from '@/Store/Storage';
import { generateRandomString } from 'ts-randomstring/lib';
import { Branches } from '@/Models/Branches';
import { Navigate } from 'react-router';
import { LocalToast } from '@/components/local/Toast';

const AccountContext = createContext<AccountType | undefined>(undefined);

export const useAccountContext = (): AccountType => {
    const context = useContext(AccountContext);
    if (!context) throw new Error('Account context not provided!');
    return context;
}

export const AccountProvider: FC<ContextChildren> = ({ children }) => {
    const [account, setAccount] = useState<Account>(new Account());
    const [loadingAccount, setLoaddingAccount] = useState<boolean>(false);
    const [deletedFranchises, setDeletedFranchises] = useState<Franchise[]>([]);
    const [deletedBranches, setDeletedBranches] = useState<Branches[]>([]);

    const service: AccountService = AccountService.getInstance();
    const store = Storage.getInstance();
    const alert = LocalToast.getInstance();

    const Initialize = async () => {
        setLoaddingAccount(true);
        const data = await service.GetData();
        if (data) {
            const user = data.UserData;
            const franchises = data.Franchises
            const franchCode = generateRandomString({ length: 10 });
            const branchCode = generateRandomString({ length: 10 });
            if (franchises.length === 0) {
                franchises.push(new Franchise({
                    IdFranchise: 0,
                    FranchiseCode: franchCode,
                    Branches: [new Branches({ IdBranch: 0, BranchCode: branchCode })]
                }))
            }
            setAccount(new Account({ UserData: { ...user, Repeat: user?.Password }, Franchises: franchises }))
        }
        setLoaddingAccount(false);
    }

    const handler = (callback: (prev: Account) => Account) => {
        setAccount(prev => callback(prev));
    }

    const FranchiseDeleted = (callback: (prev: Franchise[]) => Franchise[]) => {
        setDeletedFranchises(prev => callback(prev));
    }
    const BranchesDeleted = (callback: (prev: Branches[]) => Branches[]) => {
        setDeletedBranches(prev => callback(prev));
    }
    const LeaveAccount = () => {
        var validate = ValidateAccountForm(account);
        if (validate) {
            window.location.href = '/profile/menu';
        }
    }

    const SaveChange = async () => {
        const validate = ValidateAccountForm(account);
        
        if (validate) {
            alert.Loading('Guardando sus cambios...')
            const result = await service.UpdateAccount(account, deletedFranchises, deletedBranches);
            const branch = store.Get('branch_code');
            if (result) {
                alert.Dispose();
                alert.Success('¡Sus cambios se han guardado exitosamente!');
                if (!branch) {
                    const franchises: Franchise[] = account.Franchises;
                    const franch = franchises.map(({ IdFranchise, ...franchise }) => {
                        const branches = franchise.Branches.map(({ IdBranch, ...branch }) => branch);
                        franchise.Branches = branches;
                        return franchise;
                    })
                    store.Set('branch_code', franch[0].Branches[0].BranchCode);
                }
                return <Navigate to={'/profile/menu'} />;
            }
        }
    }

    return (
        <AccountContext.Provider value={{
            account, loadingAccount, handler, FranchiseDeleted, BranchesDeleted, Initialize, SaveChange, LeaveAccount
        }}>
            {children}
        </AccountContext.Provider>
    )
}