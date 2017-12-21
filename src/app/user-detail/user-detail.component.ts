import { Component, OnInit, Input } from '@angular/core';

import { PostCardComponent } from "../post-card/post-card.component";

import { User } from "../models/user";
import { Post } from "../models/post";
import { Event } from "../models/event";

import { UserService } from "../services/user.service";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,private location: Location, private route: ActivatedRoute) { 
    this.route.params.subscribe(() => {
      this.getUser();
    });
  }

  @Input() user: User;

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    })
  }

  goToEvent(id: number) {
    this.router.navigateByUrl("events/" + id);
  }

}
