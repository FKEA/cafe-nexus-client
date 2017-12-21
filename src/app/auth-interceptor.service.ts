import { Injectable, Injector } from '@angular/core';

import { AuthService } from "./services/auth.service"; 

import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

//Implementation from: https://angular.io/guide/http
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
 
  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let authService = this.injector.get(AuthService);

    if(authService.loggedIn) {
      const authHeader = "Bearer " + authService.getToken();
      
        const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
    
        return next.handle(authReq);
    } else {
      return next.handle(req);
    }



  }



}
