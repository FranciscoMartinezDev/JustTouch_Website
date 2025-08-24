import { LocalToast } from "@/components/local/Toast";
import type { Account } from "@/Models/Account";
import type { Authentication } from "@/Models/Authentication";
import type { Users } from "@/Models/Users";
import axios from "axios";
import type { Session } from "react-router";
const alert = LocalToast.getInstance();

export class AccountService {
    private static baseUrl: string = `${import.meta.env.VITE_SERVER_BASE_URL}/account`;
    private static instance: AccountService;

    public static getInstance(): AccountService {
        if (!AccountService.instance) {
            AccountService.instance = new AccountService();
        }
        return AccountService.instance;
    }

    public async GetData(email: string): Promise<Account | undefined> {
        try {
            const url = `${AccountService.baseUrl}/${email}`;
            const response = await axios.get(url);
            if (response.status >= 200 && response.status < 300) {
                return response.data as Account;
            }
            const errorOptions: ErrorOptions = {
                cause: response.status
            }
            throw new Error(response.statusText, errorOptions);

        } catch (e) {
            const error = e as Error;
            alert.Error(error.message);
            return undefined;
        }
    }

    public async AddAccount(user: Users): Promise<boolean> {
        try {
            const url = `${AccountService.baseUrl}/NewUser`;
            const response = await axios.post(url, user);
            if (response.status >= 200 && response.status < 300) {
                return true;
            }
            const errorOptions: ErrorOptions = {
                cause: response.status
            }
            throw new Error(response.statusText, errorOptions);

        } catch (e) {
            const error = e as Error;
            alert.Error(error.message);
            return false;
        }
    }

    public async UpdateAccount(account: Account): Promise<boolean> {
        try {
            const url = `${AccountService.baseUrl}/UpdateAccount`;
            const response = await axios.post(url, account);
            if (response.status >= 200 && response.status < 300) {
                alert.Success('¡Sus datos se guardaron exitosamente!');
                return true;
            }
            const errorOptions: ErrorOptions = {
                cause: response.status
            }

            throw new Error(response.statusText, errorOptions);
        } catch (e) {
            const error = e as Error;
            alert.Error(error.message);
            return false;
        }
    }

    public async ConfirmEmail(email: string): Promise<Authentication | undefined> {
        try {
            const url = `${AccountService.baseUrl}/ConfirmEmail/${email}`;
            const response = await axios.get(url);
            if (response.status >= 200 && response.status < 300) {
                return response.data as Authentication;
            }
            const errorOptions: ErrorOptions = {
                cause: response.status
            }

            throw new Error(response.statusText, errorOptions);
        } catch (e) {
            const error = e as Error;
            alert.Error(error.message);
            return undefined;
        }
    }

    public async Signin(user: Users): Promise<Session | undefined> {
        try {
            const url = `${AccountService.baseUrl}/Signin`;
            const response = await axios.post(url, user);
            if (response.status >= 200 && response.status < 300) {
                return response.data as Session;
            }
            const errorOptions: ErrorOptions = {
                cause: response.status
            }
            throw new Error(response.statusText, errorOptions);
        } catch (e) {
            const error = e as Error;
            alert.Error(error.message);
            return undefined;
        }
    }
}