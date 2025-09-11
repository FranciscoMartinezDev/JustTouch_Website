import type { Branches } from "@/Models/Branches";

export class Franchise {
  IdFranchise?: number;
  FranchiseCode?: string;
  FantasyName?: string;
  CompanyName?: string;
  TaxId?: string;
  TaxCategory?: string;
  Branches: Branches[] = [];

  constructor(init?: Partial<Franchise>) {
    Object.assign(this, init);
  }
};