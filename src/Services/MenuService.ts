import { LocalToast } from "@/components/local/Toast";
import axios from "axios";

export class MenuService {
    private static baseUrl: string = `${import.meta.env.VITE_SERVER_BASE_URL}/menu`;
    private static instance: MenuService;
    private static toast: LocalToast = LocalToast.getInstance();

    public static getInstance(): MenuService {
        if (!MenuService.instance) {
            MenuService.instance = new MenuService();
        }
        return MenuService.instance;
    }

    public async AddCatalog(menu: FormData): Promise<boolean> {
        const alert = MenuService.toast;
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
}