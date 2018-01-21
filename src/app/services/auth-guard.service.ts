import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { TOKEN_HEADER } from '../../environments/environment';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(private router: Router) { }

  canActivate(): boolean {
      if (isNullOrUndefined(sessionStorage.getItem(TOKEN_HEADER))) {
          this.router.navigate(['/login']);
          return false;
      } else {
          return true;
      }
  }

  canActivateChild() {
      return this.canActivate();
  }

}
