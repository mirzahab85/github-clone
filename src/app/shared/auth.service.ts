import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getAuthStatus() {
    throw new Error('Method not implemented.');
  }
  isLogedIn = false;
  constructor() { }
  isLoggedin(){
    return !!localStorage.getItem('token');
  }
}
