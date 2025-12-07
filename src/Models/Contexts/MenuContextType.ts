import { Menu } from "@/Models/Menu";
import { Product } from '@/Models/Product';
import { PublicMenu } from '@/Models/PublicMenu';
import type { Order } from "../Order";

export type MenuContextType = {
    orders: Order[],
    menu: Menu[],
    publicMenu: PublicMenu | null,
    catalog: Menu,
    deletedProducts: Product[],
    loadingMenu: boolean,
    showModal: boolean,
    menuUrl: string,
    handlerOrders: (callback: (prev: Order[]) => Order[]) => void,
    handler: (callback: (prev: Menu) => Menu) => void,
    DeletedProducts: (callback: (prev: Product[]) => Product[]) => void,
    SaveChanges: (catalogKey: string | undefined) => void,
    DropCatalog: (catalogCode: string, index: number) => void,
    Initialize: (catalogKey: string | undefined) => void,
    LoadMenu: () => void,
    LoadPublicMenu: (branchId: string) => void,
    OpenModal: () => void,
}