import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";


import { Event } from "../models/event";
import { User } from "../models/user";
import { Post } from "../models/post";

import { UserService } from "../services/user.service";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

import { EventService } from "../services/event.service";
import { PostService } from "../services/post.service";
import { AuthService } from "../services/auth.service";


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private postService: PostService
  ) { }

  @Input() event: Event;

  postForm: FormGroup;
  userIsAttending: boolean = false;

  ngOnInit() {
    this.getEvent();
  }

  buildForm() {
    this.postForm = this.fb.group({
      owner: this.authService.id,
      content: ['', Validators.required],
      event: this.event.id
    })
  }

  getEvent() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id).subscribe(event => {
      this.event = event;
      this.buildForm();
      this.checkIfAttending();
    });
  }

  checkIfAttending() {
    for (let participant of this.event.participants) {
      if (participant.id === this.authService.id) {
        this.userIsAttending = true;
      }
    }
  }

  submitPost() {
    this.postService.createPost(this.postForm.value).subscribe(() => {
      this.getEvent();
      this.buildForm();
    });
  }

  attendEvent() {
    this.eventService.attendEvent(this.authService.id, this.event.id).subscribe(() => {
      this.getEvent();
    })
  }

  goToUser(id: number){
    this.router.navigateByUrl("users/" + id);
  }

}
