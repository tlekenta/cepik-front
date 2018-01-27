import { VehicleModel } from './vehicle-model';

export class Vehicle {
  id: number;
  model: VehicleModel;
  productionYear: string;
  vin: string;
  engineNumber: string;
  enginePower: number;
  engineCapacity: number;
  numberOfSeats: number;
  firstRegistrationDate: Date;
  curbWeight: number;
  permissibleLadenMass: number;
  numberOfAxies: number;
  privileged: boolean;
  servicingDate: Date;
}