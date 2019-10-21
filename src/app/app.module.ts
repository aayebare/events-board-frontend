import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './src/app/events/events-list/events-list.component';
import { EventThumbnailComponent } from './src/app/events/events-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './src/app/nav/navbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailsComponent } from '../app/src/app/events/events-details/event-details.component';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './src/app/events/create-event/create-event.component';
import { Error404Component } from './src/app/errors/Error404.component';
import { EventRouteActivator } from '../app/src/app/events/events-details/error-route-activator.service'
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
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
  providers: [EventRouteActivator],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
