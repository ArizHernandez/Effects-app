import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = 'https://reqres.in/api';

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get<any>(`${this.url}/users`).pipe(
      map( ({ data }) => ([...data]) )
    );
  }

  getUser(id:string){
    return this.http.get<any>(`${this.url}/users/${id}`).pipe(
      map( ({ data }) => data )
    )
  }
}
