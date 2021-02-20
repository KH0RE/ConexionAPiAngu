import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:8000/api/'

  constructor( private http: HttpClient ) { }

  crearUser(data: any){
    return this.http.post(this.url + 'user2', data);
  }

  getUsers(): Observable<Object>{
    return this.http.get<Users[]>(`${this.url}/user2`);
  }

}
