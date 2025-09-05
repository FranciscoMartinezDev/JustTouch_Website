export class user_data {
    email?: string;

    constructor(init: Partial<user_data>) {
        Object.assign(this, init);
    }
}