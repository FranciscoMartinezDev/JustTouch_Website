import type { Account } from "./Account";
import type { Authentication } from "./Authentication";

export class Session {
    Account?: Account;
    Authentication?: Authentication;
    constructor(init?: Partial<Session>) {
        Object.assign(this, init);
    }
}