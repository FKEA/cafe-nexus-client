import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class AuthService {

  //Implementation inspired by https://auth0.com/blog/real-world-angular-series-part-2/

  private authURL = "http://localhost:8080/api/auth"

  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(private http: HttpClient, private router: Router) {

    if(this.getToken() !== null) {
      this.setLoggedIn(true);
      this.router.navigateByUrl("home");
    }
   }

  login(credentials: any) {

    this.http.post(this.authURL, credentials, {responseType: 'text'})
      .subscribe(
        data => {
          localStorage.setItem('id_token', data.toString());
          this.setLoggedIn(true);
          this.router.navigateByUrl("home");
        },
        error => {
          console.log(error);
        }
      );


  }

  setLoggedIn(loggedIn: boolean) {
    this.loggedIn$.next(loggedIn);
    this.loggedIn = loggedIn;
  }

  private getToken(): String {
    return localStorage.getItem("id_token") as string;
  }

  logout() {
    localStorage.removeItem("id_token");
    this.setLoggedIn(false);
    this.router.navigateByUrl("login");
  }

}
