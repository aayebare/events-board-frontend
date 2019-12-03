import { Routes } from '@angular/router';
import { EventDetailsComponent } from './src/app/events/events-details/event-details.component';
import { EventsListComponent } from './src/app/events/events-list/events-list.component'
import { CreateEventComponent } from './src/app/events/create-event/create-event.component';
import { Error404Component } from './src/app/errors/Error404.component';
import { EventRouteActivator } from './src/app/events/events-details/error-route-activator.service';
export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'error404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full'}
]
