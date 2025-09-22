import { Product } from "./Product";


export class Menu {
    CatalogCode?: string;
    BranchCode?: string;
    Catalog?: string;
    Products: Product[] = [new Product];

    constructor(init?: Partial<Menu>) {
        Object.assign(this, init);
    }
}