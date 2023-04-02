import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getAuthStatus() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  login() {

  }

}
