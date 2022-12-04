import { GitApiService } from './git-api.service';
import { environment } from './../../environments/environment';
import { apiENUM } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GitApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public gitHub(): Observable<any[]>{
    return this.httpClient.get<any[]>(environment.apiGitHubUrl + apiENUM.GitApiService)
  }
}
