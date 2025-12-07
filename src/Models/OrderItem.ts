export class OrderItem {
    ProductCode: string = String();
    ProductName: string = String();
    Quantity: number = 1;

    constructor(init?: Partial<OrderItem>){
        Object.assign(this, init);
    }
}