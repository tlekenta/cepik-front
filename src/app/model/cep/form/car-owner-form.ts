import { CarOwner } from '../car-owner';

export class CarOwnerForm{
  city: string;
  zipCode: string;
  street: string;
  houseNumber: string;
  residenceNumber: string;
  pesel: string;
  firstName: string;
  lastName: string;
  regon: string;
  institution: string;
  registrationDocumentList: number[] = [];

  constructor(d?: CarOwner) {
    if (d != undefined) {
      this.city = d.address.city;
      this.zipCode = d.address.zipCode;
      this.street = d.address.street;
      this.houseNumber = d.address.houseNumber;
      this.residenceNumber = d.address.residenceNumber;
      this.pesel = d.pesel;
      this.firstName = d.firstName;
      this.lastName = d.lastName;
      this.regon = d.regon;
      this.institution = d.institution;
      this.registrationDocumentList = [];
      if(d.registrationDocumentList != undefined)
        d.registrationDocumentList.forEach(doc => this.registrationDocumentList.push(doc.id));
    }
  }
}