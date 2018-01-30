import { OcInsurance } from '../oc-insurance';

export class OcInsuranceForm{
  from: Date;
  to: Date;
  policyNumberWithPIN: string;
  carOwnerId: number;
  vehicleId: number;

  constructor(oc?: OcInsurance) {
    if(oc != undefined){
      this.from = oc.from;
      this.to = oc.to;
      this.policyNumberWithPIN = oc.policyNumberWithPIN;
      this.carOwnerId = oc.carOwner.id;
      this.vehicleId = oc.vehicle.id;
    }
  }
}