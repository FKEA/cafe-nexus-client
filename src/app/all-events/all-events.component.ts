import { Component, OnInit } from '@angular/core';

import { EventCardComponent } from "../event-card/event-card.component";
import { CreateEventComponent } from "../create-event/create-event.component";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Event } from "../models/event";



@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
