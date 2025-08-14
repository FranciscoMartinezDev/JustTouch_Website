import type { Franchise } from "./Franchise"
import type { Users } from "./Users"

export type Account = {
    UserData?: Users,
    Franchises?: Franchise[]
}