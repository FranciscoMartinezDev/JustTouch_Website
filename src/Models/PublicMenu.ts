import type { Product } from "./Product";

export class PublicMenu {
    Business: string = String();
    InstagramUrl: string = String();
    FacebookUrl: string = String();
    WhatsappUrl: string = String();
    Open?: string | null;
    Close?: string | null;
    Menu: Product[] = [];

    constructor(init: Partial<PublicMenu>) {
        Object.assign(this, init);
    }
}