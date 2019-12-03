import {Component, OnInit} from '@angular/core';
import { EventserviceService } from '../shared/eventservice.service';
import { ToastrService } from '../../common/toastr.service';

// declare let toastr: any;
@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>UpComing Events</h1>
      <hr>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events" >
      <event-thumbnail #thumbnail [event]="event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
<!--      <button class="btn btn-primary" (click)="thumbnail.logOn(event.name)">logon</button>-->
        </div>
      </div>
    </div>`,

})
export class EventsListComponent implements OnInit {
  events: any [];
  constructor( private eventService: EventserviceService, private toastr: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
}

  handleThumbnailClick = (eventName) => {
    console.log('=================');
    this.toastr.success(eventName);
  }
// handleEventClicked(data){
//   console.log(data)
// }
}
