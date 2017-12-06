import { Injectable } from '@angular/core';

import { User } from "../models/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { Router } from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient, private router: Router) {}

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  createUser(data: any) {
    this.http.post(this.usersUrl, data, {responseType: 'text'}).subscribe(data => {
      this.router.navigateByUrl("login");
    });
  }

  //TODO: Implement getUser
  getUser(id: number): Observable<User> {
    return null;
  }
}


