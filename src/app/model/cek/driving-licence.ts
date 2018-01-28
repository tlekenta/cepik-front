import { Driver } from './driver';

export class DrivingLicence{
  id: number;
  from: Date;
  to: Date;
  sequence: string;
  driver: Driver;
}