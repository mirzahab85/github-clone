import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    dogs = ['Beagle', 'Black Lab', 'English Buldog', 'Poodle']

  constructor() { }

  ngOnInit(): void {
  }

}
