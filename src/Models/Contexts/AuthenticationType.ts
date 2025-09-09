import type { Users } from "../Users"

export type AuthenticationType = {
    user: Users,
    signing: boolean,
    signed: boolean,
    handleEmail: (value: string) => void,
    handlePassword: (value: string) => void,
    SignIn: () => void,
    SignOut: () => void,
    SelectBusiness: (branchCode: string) => void,
    hasToken: () => boolean,
    twinToken: () => boolean
}