export class Product {
  IdProduct?: number;
  Name?: string | undefined;
  Description?: string | undefined;
  Price?: string | undefined;
  IsAvailable!: boolean;
  IdMenu?: number;
  PictureUrl?: string;
  Picture?: File;

  constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}