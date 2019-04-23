import { Component, OnInit } from '@angular/core';
import {PartnersService} from "./partners.service";
import {Partners} from "./partners";


@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss'],
	providers: [PartnersService]
})

export class PartnersComponent implements OnInit {

  partners:Partners[] = [];
  constructor(private _data:PartnersService) { }

  ngOnInit() {
	  this.load();
  }

  load(){
	this._data.getData().subscribe(b => this.partners = b);
	console.log(this.partners);
  }  
  
}
