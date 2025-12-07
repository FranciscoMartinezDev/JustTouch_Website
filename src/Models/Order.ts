import type { OrderItem } from "./OrderItem";

export class Order {
    Id: number = 0;
    State: number = 0;
    Description:string = String();
    Items: OrderItem[] = [];

    constructor(init?: Partial<Order>) {
        Object.assign(this, init);
    }
}