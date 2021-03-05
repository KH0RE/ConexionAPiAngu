import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rols } from '../models/rols';
@Injectable({
  providedIn: 'root'
})
export class RolsService {

  private url = 'http://localhost:8000/api/rol'

  constructor(

    private http : HttpClient

  ) { }

  crearRol(data: any){
    return this.http.post(this.url, data);
  }

  getRol():Observable<Rols[]> {
    return this.http.get<Rols[]>(this.url);
  }

  getUsersBy(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

}
