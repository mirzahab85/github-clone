import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getAuthStatus() {
    throw new Error('Method not implemented.');
  }
  isLogedIn = false;
  constructor() { }

}