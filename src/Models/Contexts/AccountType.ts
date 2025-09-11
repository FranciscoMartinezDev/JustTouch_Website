import type { Account } from "@/Models/Account"
import type { Franchise } from "../Franchise"
import type { Branches } from "../Branches"

export type AccountType = {
    account: Account,
    loadingAccount: boolean,
    handler: (callback: (prev: Account) => Account) => void,
    FranchiseDeleted:(callback: (prev: Franchise[]) =>  Franchise[]) => void, 
    BranchesDeleted:(callback: (prev: Branches[]) =>  Branches[]) => void,
    Initialize: () => void,
    SaveChange: () => void,
    LeaveAccount: () => void,
}