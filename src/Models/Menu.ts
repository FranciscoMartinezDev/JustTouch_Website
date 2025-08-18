import { Product } from "./Product";

export class Menu {
    IdMenu?: number;
    Catalog?: string;
    IdBranch!: number;
    Products: Product[] = [new Product];

    constructor(init?: Partial<Menu>) {
        Object.assign(this, init);
    }
}