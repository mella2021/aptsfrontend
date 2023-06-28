import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rides } from './rides';


@Injectable({
  providedIn: 'root'
})
export class RidesService {
  baseUrl="http://localhost:8080/api/rides";

  constructor(private http :HttpClient) { }
  getRides(){
    return this.http.get<Rides[]>(this.baseUrl);
  }

  postRides(rides: Rides){
    return this.http.post<Rides>(`${this.baseUrl}/${Id}`);

  }
  deleteRides(id:number){
    return this,this.http.delete(this.baseUrl+ '/' +id);
  }

}
