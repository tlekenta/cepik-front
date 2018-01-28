import { RegistrationNumber } from '../registration-number';

export class RegistrationNumberForm {
  vehicleId: number;
  registrationNumber: string;
  actual: boolean;

  constructor(registrationNumber?: RegistrationNumber) {
    if(registrationNumber != undefined) {
      this.vehicleId = registrationNumber.vehicle.id;
      this.registrationNumber = registrationNumber.registrationNumber;
      this.actual = registrationNumber.actual;
    }
  }
}