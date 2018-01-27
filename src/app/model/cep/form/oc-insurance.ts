import { CarOwner } from '../car-owner';
import { Vehicle } from '../vehicle';

export class OcInsurance{
  id: number;
  from: Date;
  to: Date;
  policyNumberWithPIN: string;
  carOwner: CarOwner;
  vehicle: Vehicle;
}
