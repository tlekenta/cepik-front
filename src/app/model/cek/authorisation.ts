import { Driver } from './driver';

export class Authorisation{
  id: number;
  category: Category;
  from: Date;
  to: Date;
  driver: Driver;
}

export enum Category{
  A, A1, A2,
  B, B_E,
  C, C_E, C1, C1_E,
  D, D_E, D1, D1_E
}