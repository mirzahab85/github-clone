import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;

  getAuthStatus() {
    throw new Error('Method not implemented.');
  }
  isLogedIn = false;
  constructor(private http: HttpClient) { }

}
