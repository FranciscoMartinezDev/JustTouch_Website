export class Users {
    FirstName?: string;
    LastName?: string;
    Phone?: string;
    Email?: string;
    Password?: string;
    Repeat?: string;
    UserName?: string;
    FirstLogin?: string;

    constructor(init?: Partial<Users>) {
        Object.assign(this, init);
    }
};