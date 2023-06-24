import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl ="http://localhost:8080/api/v1/";

  constructor(private httpClient: HttpClient) { }
  getUsersList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }
  createCustomer(customer: User):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,customer);
  }

}
