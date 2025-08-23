export class Users {
    FirstName?: string;
    LastName?: string;
    Phone?: string;
    Email?: string;
    Password?: string;
    Repeat?: string;
    UserName?: string;
    FirstLogin?: string;

    constructor(firstName?: string, lastName?: string, phone?: string, email?: string, password?: string, repeat?: string, userName?: string, firstLogin?: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Phone = phone;
        this.Email = email;
        this.Password = password;
        this.Repeat = repeat;
        this.UserName = userName;
        this.FirstLogin = firstLogin;
    }
};