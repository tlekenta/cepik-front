import { Vehicle } from '../vehicle';

export class VehicleForm {
  carModelId: number = 1;
  productionYear: string = "";
  vin: string = "";
  engineNumber: string = "";
  enginePower: number = 0;
  engineCapacity: number = 0;
  numberOfSeats: number = 0;
  firstRegistrationDate: Date;
  curbWeight: number = 0;
  permissibleLadenMass: number = 0;
  numberOfAxies: number = 0;
  privileged: boolean = false;
  servicingDate: Date;

  constructor(vehicle?: Vehicle) {
    if(vehicle != undefined) {
      this.carModelId = vehicle.model.id;
      this.productionYear = vehicle.productionYear;
      this.vin = vehicle.vin;
      this.engineNumber = vehicle.engineNumber;
      this.enginePower = vehicle.enginePower;
      this.engineCapacity = vehicle.engineCapacity;
      this.numberOfSeats = vehicle.numberOfSeats
      this.firstRegistrationDate = vehicle.firstRegistrationDate
      this.curbWeight = vehicle.curbWeight;
      this.permissibleLadenMass = vehicle.permissibleLadenMass;
      this.numberOfAxies = vehicle.numberOfAxies;
      this.privileged = vehicle.privileged;
      this.servicingDate = vehicle.servicingDate;
    }
  }
}