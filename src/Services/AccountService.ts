import { LocalToast } from "@/components/local/Toast";
import type { Account } from "@/Models/Account";
import type { Users } from "@/Models/Users";
import axios from "axios";
import { Session } from '@/Models/Session';
import { AxiosClient } from "./AxiosClient";
const alert = LocalToast.getInstance();
const client = AxiosClient.getInstance();

export class AccountService {
    private static baseUrl: string = `${import.meta.env.VITE_SERVER_SECURE_BASE_URL}/account`;
    private static instance: AccountService;

    public static getInstance(): AccountService {
        if (!AccountService.instance) {
            AccountService.instance = new AccountService();
        }
        return AccountService.instance;
    }

    public async GetData(): Promise<Account | undefined> {
        try {
            const response = await client.Get<Account>('/account/Profile');
            if (response) {
                return response as Account;
            }
        } catch (e) {
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
            await client.post<boolean>('/account/UpdateAccount', account);
            alert.Success('¡Sus datos se guardaron exitosamente!');
            return true;
        } catch (e) {
            return false;
        }
    }

    public async ConfirmEmail(email: string): Promise<Session | undefined> {
        try {
            const url = `${AccountService.baseUrl}/ConfirmEmail/${email}`;
            const response = await axios.get(url);
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

    public async SignOut(): Promise<boolean> {
        try {
            var respose = await client.Get<boolean>('account/SignOut');
            return respose;
        } catch (e) {
            return false;
        }
    }
}