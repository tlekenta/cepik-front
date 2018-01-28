import { DrivingLicence } from '../driving-licence';

export class DrivingLicenceForm{
  from: Date;
  to: Date;
  sequence: string;
  driverId: number;

  constructor(dl?: DrivingLicence) {
    if(dl != undefined) {
      this.from = dl.from;
      this.to = dl.to;
      this.sequence = dl.sequence;
      this.driverId = dl.driver.id;
    }
  }
}