import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = environment.authUrl;
  constructor(private http: HttpClient) { }

  registerUser(signUpObj): any{
    return this.http.post(this.authUrl + '/signup', signUpObj, {responseType: 'text'});
  }
  loginUser(signInObj): any{
    return this.http.post(this.authUrl + '/signin', signInObj, {responseType: 'text'});
  }
}
