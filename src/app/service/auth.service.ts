import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  header = {headers: new HttpHeaders().set('token', localStorage.getItem('token'))};

  authUrl = environment.authUrl;
  constructor(private http: HttpClient) { }

  registerUser(signUpObj): any{
    return this.http.post(this.authUrl + '/signup', signUpObj, {responseType: 'text'});
  }
  loginUser(signInObj): any{
    return this.http.post(this.authUrl + '/signin', signInObj);
  }
  forgotPassword(email): any {
    return this.http.get(this.authUrl + '/forgot-password/' + email, {responseType: 'text'});
  }
  resetPassword(resetPasswordObj): any {
    return this.http.post(this.authUrl + '/reset-password', resetPasswordObj, this.header);
  }
}
