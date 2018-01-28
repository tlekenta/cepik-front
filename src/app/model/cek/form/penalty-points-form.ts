import { PenaltyPoints } from '../penalty-points';

export class PenaltyPointsForm{
  count: number;
  date: Date;
  driverId: number;

  constructor(pp?: PenaltyPoints) {
    if(pp != undefined) {
      this.count = pp.count;
      this.date = pp.date;
      this.driverId = pp.driver.id;
    }
  }
}