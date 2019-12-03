import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './src/app/events/events-list/events-list.component';
import { EventThumbnailComponent } from './src/app/events/events-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './src/app/nav/navbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailsComponent } from '../app/src/app/events/events-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './src/app/events/create-event/create-event.component';
import { Error404Component } from './src/app/errors/Error404.component';
import {EventserviceService} from './src/app/events/shared/eventservice.service';
import {ToastrService} from './src/app/common/toastr.service';
import { EventRouteActivator } from './src/app/events/events-details/error-route-activator.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventserviceService,
    ToastrService,
    EventRouteActivator,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('have you saved?')
  return false;
}
