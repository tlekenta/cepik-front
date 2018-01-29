import { Authorisation } from '../authorisation';

export class AuthorisationForm{
  category: string;
  from: Date;
  to: Date;
  driverId: number;

  constructor(auth?: Authorisation) {
    if(auth != undefined) {
      this.category = auth.category;
      this.from = auth.from;
      this.to = auth.to;
      this.driverId = auth.driver.id;
    }
  }
}