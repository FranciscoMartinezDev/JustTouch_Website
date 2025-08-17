import type { Account } from "@/Models/Account"

export type AccountType = {
    account: Account,
    handler: (callback: (prev: Account) => Account) => void,
    Initialize: () => void,
    SaveChange: () => void,
}