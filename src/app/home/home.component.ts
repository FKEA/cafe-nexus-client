import { Component, OnInit } from '@angular/core';

import { AllEventsComponent } from "../all-events/all-events.component";
import { AllPostsComponent } from "../all-posts/all-posts.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
