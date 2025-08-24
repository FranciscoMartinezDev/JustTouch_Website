export class Product {
  IdProduct?: number;
  ProductCode?: string | undefined;
  Name?: string | undefined;
  Description?: string | undefined;
  Price?: string | undefined;
  IsAvailable!: boolean;
  PictureUrl?: string;
  Picture?: File;
  Deleted: boolean = false;

  constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}