import type { Users } from "../Users"

export type ServiceRequestType = {
    user: Users,
    handleEmail: (value: string) => void,
    HandleUserName: (value: string) => void,
    newAccount: () => void,
}