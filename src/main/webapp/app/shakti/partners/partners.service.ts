import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Partners} from "./partners";
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class PartnersService {
  constructor(private _htc:HttpClient) { }
	getData():Observable<Partners[]>{
		console.log('Partners list called');
		return this._htc.get<Partners[]>("http://localhost:8080/api/partners");
    }
}