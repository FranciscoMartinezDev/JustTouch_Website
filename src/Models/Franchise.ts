import type { Branches } from "@/Models/Branches";

export class Franchise {
  FranchiseCode?: string;
  FantasyName?: string;
  CompanyName?: string;
  TaxId?: string;
  TaxCategory?: string;
  Branches: Branches[] = [];
  Deleted: boolean = false;

  constructor(init?: Partial<Franchise>) {
    Object.assign(this, init);
  }
};