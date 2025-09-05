import type { Users } from "../Users"

export type AuthenticationType = {
    user: Users,
    handleEmail: (value: string) => void,
    handlePassword: (value: string) => void,
    SignIn: () => void,
    SelectBusiness: (branchCode: string) => void,
    hasToken: () => boolean,
    twinToken: () => boolean
}