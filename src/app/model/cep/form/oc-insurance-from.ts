import { CarOwner } from '../car-owner';
import { Vehicle } from '../vehicle';
import { OcInsurance } from '../oc-insurance';

export class OcInsuranceForm{
  from: Date;
  to: Date;
  policyNumberWithPIN: string;
  carOwner: CarOwner;
  vehicle: Vehicle;

  constructor(oc?: OcInsurance) {
    if(oc != undefined){
      this.from = oc.from;
      this.to = oc.to;
      this.policyNumberWithPIN = oc.policyNumberWithPIN;
      this.carOwner = oc.carOwner;
      this.vehicle = oc.vehicle;
    }
  }
}