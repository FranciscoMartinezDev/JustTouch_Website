export class Product {
  IdProduct?: number | 0;
  Name?: string | undefined;
  Description?: string | undefined;
  Price?: string | undefined;
  IsAvailable!: boolean | true;
  IdMenu?: number | 0;
  PictureUrl?: string;
  Picture?: File;

  constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}