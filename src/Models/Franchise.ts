import type { Branches } from "@/Models/Branches";

export class Franchise {
  FantasyName?: string;
  CompanyName?: string;
  TaxId?: string;
  TaxCategory?: string;
  Branches: Branches[];

  constructor(FantasyName?: string, CompanyName?: string, TaxId?: string, TaxCategory?: string, Branches?: Branches[]) {
    this.FantasyName = FantasyName;
    this.CompanyName = CompanyName;
    this.TaxId = TaxId;
    this.TaxCategory = TaxCategory;
    this.Branches = Branches || [];
  }
};