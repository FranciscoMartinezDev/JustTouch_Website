import { Product } from "./Product";

export class Menu {
    CatalogCode?: string;
    Catalog?: string;
    IdBranch!: number;
    Products: Product[] = [new Product];

    constructor(init?: Partial<Menu>) {
        Object.assign(this, init);
    }
}