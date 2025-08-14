import type { Account } from "@/Models/Account"

export type AccountType = {
    account: Account | null,
    handler: (callback: () => Account) => void
}