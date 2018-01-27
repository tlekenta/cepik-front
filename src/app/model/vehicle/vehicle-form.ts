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
}