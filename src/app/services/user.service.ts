import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  signup(user:IUser) {
    return this.http.post<IUser>(`http://localhost:3000/users`,user);
  }
}
