import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Register} from "./register";
import {Payment} from "./payment";
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private _htc:HttpClient) { }
	saveRegister(register: Register) : any {
        let body = JSON.stringify(register);
		console.log(body);
        return this._htc.post('https://shaktiapp.herokuapp.com/api/signups', body, httpOptions);
    }  
	savePayment(payment: Payment): any {
        let body = JSON.stringify(payment);
		console.log(body);
        return this._htc.post('https://shaktiapp.herokuapp.com/api/payments', body, httpOptions);
    }  
}