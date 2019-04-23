import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Events} from "./Events";
import {Observable} from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class EventsService {
  constructor(private _htc:HttpClient) { }
	getData():Observable<Events[]>{
		console.log('events list called');
		return this._htc.get<Events[]>("https://shaktiapp.herokuapp.com/api/events");
    }
}