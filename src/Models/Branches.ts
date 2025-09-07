export class Branches {
  IdBranch?: number;
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
  deleted: boolean = false;
  
  constructor(init?: Partial<Branches>) {
    Object.assign(this, init);
  }
}