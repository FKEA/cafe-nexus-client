import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { Event } from "../models/event";

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }
  
    private eventUrl = "http://localhost:8080/api/events";

  
    createEvent(data: any): Observable<any> {
      return this.http.post(this.eventUrl, data, {responseType: 'text'});
    }

    getEvents(): Observable<Event[]> {
      return this.http.get<Event[]>(this.eventUrl);
    }

    getEvent(id: number): Observable<Event> {
      return this.http.get<Event>(this.eventUrl + "/" + id);
    } 

    attendEvent(uid: Number, pid: number): Observable<any> {
      const jsonObject = {
        user_id: uid,
        event_id: pid
      }
      return this.http.post(this.eventUrl + "/subscribe", jsonObject, {responseType: 'text'});
    }

}
