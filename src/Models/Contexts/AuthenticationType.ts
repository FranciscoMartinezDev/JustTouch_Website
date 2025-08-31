import type { Franchise } from "../Franchise"
import type { Users } from "../Users"

export type AuthenticationType = {
    Business: Franchise[],
    user: Users,
    handleEmail: (value: string) => void,
    handlePassword: (value: string) => void,
    SignIn: () => void,
    SelectBusiness: (branchCode: string) => void,
}