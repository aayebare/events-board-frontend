import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-event',
  template: `
  <h1>New Event</h1>
  <hr>
  <div class="col-md-6">
  <br/>
  <br/>
  <button type="submit" class="btn btn-primary">Save</button>
  <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
  </div>` ,
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  cancel = () => {
    this.router.navigate(['/events'])
  }

}
