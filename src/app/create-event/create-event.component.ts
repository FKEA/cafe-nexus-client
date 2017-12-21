import { Component, OnInit } from '@angular/core';
import { Event } from "../models/event";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


import { Location } from "@angular/common";

import { Router } from "@angular/router";

import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from "../services/auth.service";
import { EventService } from "../services/event.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  eventForm: FormGroup;
  eventStartDate: Date;
  eventEndDate: Date;

  eventStartHours: number;
  eventStartMinutes: number;

  eventEndHours: number;
  eventEndMinutes: number;


  constructor(
    private authService: AuthService, 
    private fb: FormBuilder, 
    private location: Location, 
    private adapter: DateAdapter<any>,
    private eventService: EventService,
    private router: Router) { }

  ngOnInit() {
    this.adapter.setLocale('dk');
    this.buildForm();
  }

  goBack() {
    this.location.back();
  }

  buildDates() {

    this.eventStartDate.setHours(this.eventStartHours);
    this.eventStartDate.setMinutes(this.eventStartMinutes);

    this.eventEndDate.setHours(this.eventEndHours);
    this.eventEndDate.setMinutes(this.eventEndMinutes);

    this.eventForm.patchValue({
      endDate: this.eventEndDate.getFullYear() + "-" + (this.eventEndDate.getMonth()+1) + "-" + this.eventEndDate.getDate() + " " + this.eventEndDate.getHours() + ":" + this.eventEndDate.getMinutes() + ":" + this.eventEndDate.getSeconds(),
      startDate: this.eventStartDate.getFullYear() + "-" + (this.eventStartDate.getMonth()+1) + "-" + this.eventStartDate.getDate() + " " + this.eventStartDate.getHours() + ":" + this.eventStartDate.getMinutes() + ":" + this.eventStartDate.getSeconds()
    })

  }

  onEndDateChange(type: String, event: MatDatepickerInputEvent<Date>) {
    this.eventEndDate = event.value;
    this.eventForm.patchValue({
      endDate: event.value
    })
  }

  onStartDateChange(type: String, event: MatDatepickerInputEvent<Date>) {
    this.eventStartDate = event.value;
    this.eventForm.patchValue({
      startDate: event.value
    })
  }

  buildForm() {
    this.eventForm = this.fb.group({
      owner: this.authService.id,
      title: ['', Validators.required],
      startDate: this.eventStartDate,
      endDate: this.eventEndDate,
      description: ['', Validators.required]
    })
  }

  createEvent() {
    this.buildDates();

    this.eventService.createEvent(this.eventForm.value).subscribe(() => {
      this.router.navigateByUrl("events");
    });

  }

}
