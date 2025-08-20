import { LocalToast } from "@/components/local/Toast";
import type { Account } from "@/Models/Account";
import axios from "axios";

export class AccountService {
    private static baseUrl: string = `${import.meta.env.VITE_SERVER_BASE_URL}/account`;
    private static instance: AccountService;
    private static toast: LocalToast = LocalToast.getInstance();

    public static getInstance(): AccountService {
        if (!AccountService.instance) {
            AccountService.instance = new AccountService();
        }
        return AccountService.instance;
    }

    public async UpdateAccount(account: Account): Promise<boolean> {
        const alert = AccountService.toast;
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




}