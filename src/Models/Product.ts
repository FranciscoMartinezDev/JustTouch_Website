export class Product {
  IdProduct?: number | null;
  Name?: string | undefined;
  Description?: string | undefined;
  Price?: number;
  IsAvailable!: boolean;
  IdMenu?: number | null;
  PictureUrl?: string;
  Picture?: File;

  constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}