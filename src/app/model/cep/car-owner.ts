import { Address } from './address';
import { RegistrationDocument } from './registration-document';
import { OcInsurance } from './form/oc-insurance';

export class CarOwner{
  id: number;
  address: Address;
  pesel: string;
  regon: string;
  firstName: string;
  lastName: string;
  institution: string;
  ocInsuranceSet: OcInsurance[];
  registrationDocumentList: RegistrationDocument[];
}