import { Menu } from "@/Models/Menu";
import { Product } from "@/Models/Product";

export class MenuRequest {
    Menu: Menu = new Menu();
    DeletedProducts: Product[] = [];

    constructor(init: Partial<MenuRequest>){
        Object.assign(this, init);
    }
}