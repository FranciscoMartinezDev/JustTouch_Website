import { LocalToast } from "@/components/local/Toast";
import type { Menu } from "@/Models/Menu";
import axios from "axios";
const alert = LocalToast.getInstance();

export class MenuService {
    private static baseUrl: string = `${import.meta.env.VITE_SERVER_BASE_URL}/menu`;
    private static instance: MenuService;

    public static getInstance(): MenuService {
        if (!MenuService.instance) {
            MenuService.instance = new MenuService();
        }
        return MenuService.instance;
    }

    public async GetMenu(BranchCode: string): Promise<Menu[] | undefined> {
        try {
            const url = `${MenuService.baseUrl}/${BranchCode}`
            const response = await axios.get(url);
            if (response.status >= 200 && response.status <= 300) {
                return response.data as Menu[];
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

    public async GetCatalog(CatalogCode: string): Promise<Menu | undefined> {
        try {
            const url = `${MenuService.baseUrl}/Catalog/${CatalogCode}`;
            const response = await axios.get(url);
            if (response.status >= 200 && response.status <= 300) {
                return response.data as Menu;
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

    public async AddCatalog(menu: FormData): Promise<boolean> {
        try {
            const url = `${MenuService.baseUrl}/AddCatalog`;
            const response = await axios.post(url, menu);
            if (response.status >= 200 && response.status <= 300) {
                alert.Dispose();
                alert.Success('¡Catalogo añadido exitosamente!')
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

    public async UpdateCatalog(menu: FormData): Promise<boolean> {
        try {
            const url = `${MenuService.baseUrl}/EditCatalog`;
            const response = await axios.post(url, menu);
            if (response.status >= 200 && response.status < 300) {
                alert.Success('¡Menu actualizado!');
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