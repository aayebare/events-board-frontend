import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import { EventserviceService } from '../shared/eventservice.service'


@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventserviceService, private router: Router){}

    canActivate(route:ActivatedRouteSnapshot){
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        if(!eventExists)
            this.router.navigate(['/error404'])
        return eventExists

    }
}
