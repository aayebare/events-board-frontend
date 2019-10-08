import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `<app-navbar></app-navbar>
    <events-list></events-list>`,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'events board';
  name = 'Mark';
}
