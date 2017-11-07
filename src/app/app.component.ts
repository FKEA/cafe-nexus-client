import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/user';
import { UserService } from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[];
  title = 'Welcome to the cafe nexus client!';

  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void {
     this.userService.getUsers().subscribe(users => this.users = users);
  }


  

}
