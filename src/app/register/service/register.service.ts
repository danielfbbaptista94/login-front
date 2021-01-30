import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(userIn: User) {
    return this.http.post(API_URL + '/auth/register', userIn, { observe: 'response' });
  }
}
