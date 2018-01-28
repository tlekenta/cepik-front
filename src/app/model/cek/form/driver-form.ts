import { Driver } from '../driver';

export class DriverForm{
  city: string;
  zipCode: string;
  street: string;
  houseNumber: string;
  residenceNumber: string;
  pesel: string;
  frirstName: string;
  lastName: string;
  examinationElapseDate: Date;

  constructor(d?: Driver) {
    if(d != undefined) {
      this.city = d.address.city;
      this.zipCode = d.address.zipCode;
      this.street = d.address.street;
      this.houseNumber = d.address.houseNumber;
      this.residenceNumber = d.address.residenceNumber;
      this.pesel = d.pesel;
      this.frirstName = d.frirstName;
      this.lastName = d.lastName;
      this.examinationElapseDate = d.examinationElapseDate;
    }
  }
}