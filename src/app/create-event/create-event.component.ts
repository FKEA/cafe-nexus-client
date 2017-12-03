import { Component, OnInit } from '@angular/core';
import { Event } from "../models/event";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { Location } from "@angular/common";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private location: Location, private adapter: DateAdapter<any>) { }

  ngOnInit() {
    this.adapter.setLocale('dk');
  }

  goBack() {
    this.location.back();
  }

}
