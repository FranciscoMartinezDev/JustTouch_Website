import type { Branches } from "@/Models/Branches";

export type Franchise = {
  FantasyName?: string | null;
  CompanyName?: string | null;
  TaxId?: string | null;
  TaxCategory?: string | null;
  Branches: Branches[];
};