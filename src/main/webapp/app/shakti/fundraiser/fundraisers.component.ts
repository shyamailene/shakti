import { Component, OnInit } from '@angular/core';
import {FundraiserService} from "./fundraiser.service";
import {Fundraiser} from "./fundraiser";
import { Payment } from "./payment";
import { Observable } from 'rxjs/Rx';
import { AlertService } from '../_services/index';

declare let paypal: any;

@Component({
    selector: 'app-fundraisers',
    templateUrl: './fundraisers.component.html',
    styleUrls: ['./fundraiser.component.scss'],
	providers: [FundraiserService]
})
export class FundraisersComponent implements OnInit {
	message:String='';
	isSaving: boolean;
    test : Date = new Date();
  age : boolean = true;
  fundraiserList:Fundraiser[]=[{name:null,email:null,phone:null,age:null,email2:null,id:null,volunteer:null,interested:null,address:null}];
  constructor(private _data:FundraiserService, private alertService: AlertService) { }

  ngOnInit() {
    this.fetch();
  }

	fetch(){
		console.log('fetch fundraiser list');
		//this._data.saveFundraiser(this.fundraiser).subscribe(b => this.result = b);
		this.subscribeToGetResuls(
                this._data.getFundraisers());		
  }

  private subscribeToGetResuls(result: Observable<Fundraiser[]>) {
    result.subscribe((res: Fundraiser[]) =>
        this.onResultSuccess(res), (res: Object) => this.onSaveError());
  }

  private onResultSuccess(result: Fundraiser[]) {
    this.fundraiserList = result;
    console.log('result id'+ JSON.stringify(this.fundraiserList));
  }

  private onSaveError() {
    this.alertService.error('Please try again');
    this.isSaving = false;
    this.fundraiserList=[{name:'test',email:'email@s.com',phone:null,age:null,email2:null,id:null,volunteer:null,interested:null,address:null},{name:'test',email:null,phone:null,age:null,email2:null,id:null,volunteer:null,interested:null,address:null}]
    console.log(this.fundraiserList);
  }
}
