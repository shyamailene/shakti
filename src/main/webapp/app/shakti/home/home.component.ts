import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";
import {ContactUs} from "./contactus";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
	providers: [DataService]
})

export class HomeComponent implements OnInit {
	contactus:ContactUs ={content:'',email:'',mobile:'',name:'',relatedto:'',id:null};
	result:any='';
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor(private _data:DataService) { }

    ngOnInit() {}
	
	clear(){ console.log('test');}
	
	insert(){
		console.log('insert');
		console.log('insert'+this.contactus.name);
		this._data.saveContactUs(this.contactus).subscribe(b => this.result = b);
		this.contactus={content:'',email:'',mobile:'',name:'',relatedto:'',id:null};
		//result='Succesfully'
		console.log('result'+this.result);
	}
	
}
