import { Vehicle } from '../vehicle/vehicle';
import { Data } from '@angular/router';

export class RegistrationDocument{
  id: number;
  vehicle: Vehicle;
  sequence: string;
  to: Data;
}