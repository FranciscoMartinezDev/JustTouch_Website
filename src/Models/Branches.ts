export class Branches {
  BranchCode?: string;
  Country?: string;
  ProvinceOrState?: string;
  City?: string;
  Address?: string;
  PostalCode?: string;
  PhoneNumber?: string;
  Email?: string;
  OpenTime?: string;
  CloseTime?: string;
  Deleted: boolean = false;
  
  constructor(init?: Partial<Branches>) {
    Object.assign(this, init);
  }
}