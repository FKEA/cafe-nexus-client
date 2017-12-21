import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/user';
import { UserService } from "./services/user.service";

import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

import { AuthService } from "./services/auth.service";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

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
  pageTitle: String;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.route.params.subscribe(() => {
      this.userService.generateUserCache();
    });
  }

  ngOnInit(): void {

     this.authService.loggedIn$.subscribe(loggedIn => {
       this.loggedIn = loggedIn;
       if (loggedIn) {
          this.fullName = this.authService.getFirstName() + " " + this.authService.getLastName();
       } else {
         this.fullName = '';
       }
     })

     //Implementation from: https://stackoverflow.com/questions/38644314/changing-the-page-title-using-the-angular-2-new-router
     this.router.events
     .filter(event => event instanceof NavigationEnd)
     .map(() => this.route)
     .map(route => {
       while (route.firstChild) route = route.firstChild;
       return route;
     })
     .filter(route => route.outlet === 'primary')
     .mergeMap(route => route.data)
     .subscribe((event) => this.pageTitle = event['title']);
  }

  logout() {
    this.authService.logout();
  }

  goToAccount() {
    this.router.navigateByUrl("users/" + this.authService.getId());
  }
  
  goHome() {
    this.router.navigateByUrl("posts");
  }

  goToEvents() {
    this.router.navigateByUrl("events");
  }

  goToPosts() {
    this.router.navigateByUrl("posts");
  }

  //Implementation from: https://github.com/angular/angular/issues/7791#issuecomment-280317015
  onDeactivate() {
    window.scrollTo(0, 0);
  }

}
