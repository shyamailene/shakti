import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Fundraiser} from "./fundraiser";
import {Payment} from "./payment";
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class FundraiserService {
  constructor(private _htc:HttpClient) { }
	saveFundraiser(fundraiser: Fundraiser) : any {
        let body = JSON.stringify(fundraiser);
		console.log(body);
        return this._htc.post('https://shaktiapp.herokuapp.com/api/fundraisers', body, httpOptions);
    }  
	savePayment(payment: Payment) : any{
        let body = JSON.stringify(payment);
		console.log(body);
        return this._htc.post('https://shaktiapp.herokuapp.com/api/payments', body, httpOptions);
    }  
	getFundraisers() : any{
		console.log('get fundraiser list');
        return this._htc.get('https://shaktiapp.herokuapp.com/api/fundraisers', httpOptions);
    }  
}