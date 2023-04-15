import { Component, OnInit } from '@angular/core';

const HEROES = [
  {id: 1, name: "Superman"},
  {id: 2, name: "Batman"},
  {id: 3, name: "Spiderman"}
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: string[] = ['Apple', 'Banana', 'Orange'];

  addItem() {
    this.items.push('Ananas');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
