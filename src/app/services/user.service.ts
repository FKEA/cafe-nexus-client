import { Injectable } from '@angular/core';

import { User } from "../models/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { Router } from "@angular/router";

import { BehaviorSubject } from "rxjs/BehaviorSubject";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private users: User[];

  cacheLoaded: boolean = false;

  cacheLoaded$ = new BehaviorSubject<boolean>(this.cacheLoaded);

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

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.usersUrl + "/" + id);
  }

  generateUserCache() {
    if(!this.cacheLoaded) {
      this.getUsers().subscribe(data => {
        this.users = data;
        this.cacheLoaded = true;
        this.cacheLoaded$.next(true);
    });
    }

  }

  getUserInfo(id: number): User {
    for (let user of this.users) {
      if (user.id === id) {
        return user;
      }
    }
  }
}


