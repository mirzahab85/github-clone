import { IconServices } from './custom-svg/icon.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-clone';
  constructor(private _iconService: IconServices) { }

}
