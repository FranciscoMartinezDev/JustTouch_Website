import { Menu } from "@/Models/Menu";
import { Product } from '@/Models/Product';

export type MenuContextType = {
    menu: Menu[],
    catalog: Menu,
    deletedProducts: Product[],
    loadingMenu: boolean,
    showModal: boolean,
    menuUrl: string,
    handler: (callback: (prev: Menu) => Menu) => void,
    DeletedProducts: (callback: (prev: Product[]) => Product[]) => void,
    SaveChanges: (catalogKey: string | undefined) => void,
    DropCatalog: (catalogCode: string, index: number) => void,
    Initialize: (catalogKey: string | undefined) => void,
    LoadMenu: () => void,
    OpenModal: () => void,
}