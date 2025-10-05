import { LocalToast } from "@/components/local/Toast";
import type { Menu } from "@/Models/Menu";
import { Storage } from "@/Store/Storage";
import { AxiosClient } from "@/Services/AxiosClient";
const alert = LocalToast.getInstance();
const store = Storage.getInstance();
const client = AxiosClient.getInstance();

export class MenuService {
    private static baseUrl: string = `${import.meta.env.VITE_SERVER_SECURE_BASE_URL}/menu`;
    private static instance: MenuService;

    public static getInstance(): MenuService {
        if (!MenuService.instance) {
            MenuService.instance = new MenuService();
        }
        return MenuService.instance;
    }

    public async GetMenu(): Promise<Menu[] | undefined> {
        try {
            const branchCode = store.Get<string>('branch_code');
            const url = `${MenuService.baseUrl}/${branchCode}`
            const response = await client.Get<Menu[] | []>(url);
            return response as Menu[];
        } catch (e) {
            const error = e as Error;
            alert.Error(error.message);
            return undefined;
        }
    }

    public async GetCatalog(CatalogCode: string): Promise<Menu | undefined> {
        try {
            const url = `${MenuService.baseUrl}/Catalog/${CatalogCode}`;
            const response = await client.Get<Menu | undefined>(url);
            return response! as Menu;
        } catch (e) {
            const error = e as Error;
            alert.Error(error.message);
            return undefined;
        }
    }

    public async AddCatalog(menu: FormData): Promise<boolean> {
        try {

            const url = `${MenuService.baseUrl}/AddCatalog`;
            const response = await client.Post<boolean>(url, menu, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            alert.Dispose();
            alert.Success('¡Catalogo añadido exitosamente!')
            return response;
        } catch (e) {
            const error = e as Error;
            alert.Error(error.message);
            return false;
        }
    }

    public async UpdateCatalog(menu: FormData): Promise<boolean> {
        try {
            const url = `${MenuService.baseUrl}/EditCatalog`;
            const response = await client.Post<boolean>(url, menu, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            return response;
        } catch (e) {
            return false;
        }
    }
}