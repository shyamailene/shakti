import { Component, OnInit } from '@angular/core';
import {EventsService} from "./events.service";
import {Events} from "./Events";


@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
	providers: [EventsService]
})

export class EventsComponent implements OnInit {

  events:Events[] = [];
  constructor(private _data:EventsService) { }

  ngOnInit() {
	  this.load();
  }

  load(){
	this._data.getData().subscribe(b => this.events = b);
	console.log(this.events);
  }  
  
}
