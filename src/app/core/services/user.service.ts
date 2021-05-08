import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DogPictureRessponse } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = 'https://reqres.in/api';

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get<DogPictureRessponse>(`${this.url}/users`);
  }
}
