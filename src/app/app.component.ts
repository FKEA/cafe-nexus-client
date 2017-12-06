import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/user';
import { UserService } from "./services/user.service";
import { HomeComponent } from "./home/home.component";

import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[];
  title = 'Cafe Nexus';
  fullName: String;
  loggedIn: boolean;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
     //this.userService.getUsers().subscribe(users => this.users = users);
     
     this.authService.loggedIn$.subscribe(loggedIn => {
       this.loggedIn = loggedIn;
       if (loggedIn) {
          this.fullName = this.authService.getFirstName() + " " + this.authService.getLastName();
       } else {
         this.fullName = '';
       }
     })
  }

  logout() {
    this.authService.logout();
  }


  

}
