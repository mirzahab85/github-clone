import { IUser } from './../models/user.model';
import { apiENUM } from './../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);

  constructor(private httpClient: HttpClient) {

  }

  getUsers():Observable<any> {
    return this.httpClient.get(environment.apiServer + 'users')
  }

}





