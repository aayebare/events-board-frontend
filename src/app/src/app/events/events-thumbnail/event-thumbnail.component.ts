import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
<!--    <div [ngClass]="{green:event?.time==='8:00 am', bold:event?.time==='8:00 am'}" [ngSwitch]="event?.time">Time: {{event?.time}}-->
      <div [ngClass]="getStartTime()" [ngSwitch]="event?.time">Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchCase="'9:00 am'">(Normal Start)</span>
    </div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location?.address}}</span>
      <span>&nbsp;</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
      <div *ngIf="event?.onlineUrl">
        Online Url: {{event?.onlineUrl}}
      </div>
  </div>`,
  styles: [`
    .bold { font-weight: bold}
    .green { color: green !important}
    .thumbnail { min-height: 210px; margin-left: 20px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }`
  ]
})

export class EventThumbnailComponent {
  @Input() event: any;
  // @Output() eventClick = new EventEmitter()
  //
  // handleClickMe(){
  //   this.eventClick.emit(this.event.name);
  // }
  getStartTime() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };

    // if (this.event && this.event.time === '8:00 am')
    //   return 'green bold'
    // return ''
    //
    // if (this.event && this.event.time === '8:00 am')
    //   return ['green bold']
    // return []
  }

}
