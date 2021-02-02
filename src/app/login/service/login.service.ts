import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginDTO } from "../model/loginDTO";
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}

  logIn(loginDTO: LoginDTO) {
    return this.http.post(API_URL + '/auth/login', loginDTO, { observe: 'response' });
  }

}
