import type { Franchise } from "./Franchise"
import { Users } from "./Users"

export class Account {
    UserData?: Users;
    Franchises: Franchise[];

    constructor(user?: Users, franchises?: Franchise[]) {
        this.UserData = user || new Users();
        this.Franchises = franchises || [];
    }
}