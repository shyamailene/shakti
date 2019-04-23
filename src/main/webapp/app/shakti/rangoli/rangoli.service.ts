import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Rangoli} from "./rangoli";
import {Payment} from "./payment";
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class RangoliService {
  constructor(private _htc:HttpClient) { }
	saveRangoli(rangoli: Rangoli) : any{
        let body = JSON.stringify(rangoli);
		console.log(body);
        return this._htc.post('https://shaktiapp.herokuapp.com/api/rangolis', body, httpOptions);
    }  
	savePayment(payment: Payment) : any{
        let body = JSON.stringify(payment);
		console.log(body);
        return this._htc.post('https://shaktiapp.herokuapp.com/api/payments', body, httpOptions);
    }  
	getRangolis() : any{
		console.log('get rangolis');
        return this._htc.get('https://shaktiapp.herokuapp.com/api/rangolis', httpOptions);
    }  
}