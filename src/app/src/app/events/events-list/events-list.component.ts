import {Component, OnInit} from '@angular/core';
import { EventserviceService } from '../shared/eventservice.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>UpComing Events</h1>
      <hr>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events" >
      <event-thumbnail #thumbnail [event]="event" ></event-thumbnail>
<!--      <button class="btn btn-primary" (click)="thumbnail.logOn()">logon</button>-->
        </div>
      </div>
    </div>`,

})
export class EventsListComponent implements OnInit {
  events: any [];
  constructor( private eventService: EventserviceService) {}

  ngOnInit() {

  this.events = this.eventService.getEvents();
}

// handleEventClicked(data){
//   console.log(data)
// }
}
