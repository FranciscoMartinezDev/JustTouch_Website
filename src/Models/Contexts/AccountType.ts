import type { Account } from "@/Models/Account"

export type AccountType = {
    account: Account,
    loadingAccount: boolean,
    handler: (callback: (prev: Account) => Account) => void,
    Initialize: () => void,
    SaveChange: () => void,
    LeaveAccount: () => void,
}