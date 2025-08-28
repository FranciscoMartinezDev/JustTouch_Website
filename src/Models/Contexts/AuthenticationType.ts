import type { Franchise } from "../Franchise"

export type AuthenticationType = {
    Business: Franchise[],
    handleEmail: (value: string) => void,
    handlePassword: (value: string) => void,
    SignIn: () => void,
    SelectBusiness: (branchCode: string) => void,
}