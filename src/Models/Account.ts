import type { Franchise } from "./Franchise"
import { Users } from "./Users"

export class Account {
    UserData?: Users;
    Franchises: Franchise[] = [];

    constructor(init?: Partial<Account>) {
        Object.assign(this, init);
    }
}