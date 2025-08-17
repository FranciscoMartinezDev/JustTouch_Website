export class Branches {
  Country?: string;
  ProvinceOrState?: string;
  City?: string;
  Address?: string;
  PostalCode?: string;
  PhoneNumber?: string;
  Email?: string;
  OpenTime?: string;
  CloseTime?: string;

  constructor(Country?: string, ProvinceOrState?: string, City?: string, Address?: string, PostalCode?: string, PhoneNumber?: string,
    Email?: string, OpenTime?: string, CloseTime?: string) {
    this.Country = Country;
    this.ProvinceOrState = ProvinceOrState;
    this.City = City;
    this.Address = Address;
    this.PostalCode = PostalCode;
    this.PhoneNumber = PhoneNumber;
    this.Email = Email;
    this.OpenTime = OpenTime;
    this.CloseTime = CloseTime;
  }
}