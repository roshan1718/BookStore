import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  isLoginRights(): boolean {
    let key = localStorage.getItem('token');
    console.log('generated key ', key);
    if (key === null) {
      return false;
    }
    else {
      return true;
    }
  }
}
