import { Injectable } from '@angular/core';

import { User } from "./models/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

}


