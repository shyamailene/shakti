import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ContactUs} from "./contactus";
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class DataService {
  constructor(private _htc:HttpClient) { }
	saveContactUs(contactus: ContactUs) {
        let body = JSON.stringify(contactus);
        return this._htc.post('https://shaktiapp.herokuapp.com/api/contactuses', body, httpOptions);
    }  
}