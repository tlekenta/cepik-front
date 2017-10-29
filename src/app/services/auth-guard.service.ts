import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  canActivate(): boolean {
    // TODO zaimplementować po ogarnięciu logowania
    return true;
  }

  constructor() { }

}
