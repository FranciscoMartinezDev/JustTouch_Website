export class Product {
  IdProduct: number = 0;
  ProductCode?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  Price?: string | undefined;
  IsAvailable!: boolean;
  PictureUrl?: string | undefined;
  Picture?: File | null;

  constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}