import { IconServices } from './custom-svg/icon.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-clone';
  teams$ = this.http.get('http://localhost:3000/api/teams');
  constructor(private _iconService: IconServices, private http: HttpClient) { }
}
