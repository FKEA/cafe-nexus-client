import { Component, OnInit } from '@angular/core';

import { CreateEventComponent } from "../create-event/create-event.component";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Event } from "../models/event";

import { EventService } from "../services/event.service";

import { Router } from "@angular/router";

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private router: Router
  ) { 
  }

  events: Event[];

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  goToEvent(id: number) {
    this.router.navigateByUrl("events/" + id);
  }

}
