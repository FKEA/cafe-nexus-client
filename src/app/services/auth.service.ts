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

  id: Number;
  firstname: String;
  lastName: String;
  email: String;

  constructor(private http: HttpClient, private router: Router) {

    if(this.getToken() !== null) {
      this.setLoggedIn(true);
      this.id = this.getId();
      this.email = this.getEmail();
      this.firstname = this.getFirstName();
      this.lastName = this.getLastName();
      this.router.navigateByUrl("home");
    }
   }

  login(credentials: any) {

    this.http.post(this.authURL, credentials)
      .subscribe(
        
        data => {
          localStorage.setItem('token', data['token']);
          localStorage.setItem('user_id', data['user']['id']);
          localStorage.setItem('user_email', data['user']['email']);
          localStorage.setItem('user_firstName', data['user']['firstName']);
          localStorage.setItem('user_lastName', data['user']['lastName']);
          this.setLoggedIn(true);
          this.id = this.getId();
          this.email = this.getEmail();
          this.firstname = this.getFirstName();
          this.lastName = this.getLastName();
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
    return localStorage.getItem("token") as string;
  }

  private getId(): Number {
    return Number(localStorage.getItem('user_id'));
  }

  private getEmail(): String {
    return localStorage.getItem('user_email');
  }

  getFirstName(): String {
    return localStorage.getItem('user_firstName');
  }

  getLastName(): String {
    return localStorage.getItem('user_lastName');
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_firstName");
    localStorage.removeItem("user_lastName");
    this.setLoggedIn(false);
    this.router.navigateByUrl("login");
  }

}
