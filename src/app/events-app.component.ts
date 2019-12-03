import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <div class="events-body">
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'events board';
  name = 'Mark';
}
