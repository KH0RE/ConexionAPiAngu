import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {



  private url = 'http://localhost:8000/api/user2'

  constructor( private http: HttpClient ) { }

  crearUser(data: any){
    return this.http.post(this.url, data);
  }

  getUsers():Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }

  deleteUsers(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }


  getUsersBy(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateUsers(id: string, data: any){
    return this.http.put(`${this.url}/${id}`, data);
  }

}
