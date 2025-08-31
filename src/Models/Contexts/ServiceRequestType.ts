import type { Users } from "../Users"

export type ServiceRequestType = {
    user: Users,
    requesting: boolean,
    requested: boolean,
    confirming: boolean,
    confirmed: boolean,
    handleEmail: (value: string) => void,
    HandleUserName: (value: string) => void,
    newAccount: () => void,
    confirmEmail: (email: string | undefined) => void,
}