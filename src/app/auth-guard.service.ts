import { Injectable } from '@angular/core';
import { CanActivate, Router }    from '@angular/router';

import { AuthService } from "./services/auth.service";


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.loggedIn) {
      return true;
    } else {
      this.router.navigateByUrl("login");
      return false;
    }
  }



  

}
