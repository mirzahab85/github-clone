import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';


// const HEROES = [
//   {id: 1, name: "Superman"},
//   {id: 2, name: "Batman"},
//   {id: 3, name: "Spiderman"}
// ];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: string[] = ['Apple', 'Banana', 'Orange'];

   addItem() {
    this.items.push('Avokado');
  }

  removeItem() {
    this.items.pop();
  }

  removefirstItem() {
    this.items.shift();
  }

  constructor() { }

  ngOnInit(): void {
  }

  drags = [
    {
      name: 'Angular',
      category: 'Web development'
    },
    {
      name: 'Flexbox',
      category: 'Web development'
    },
    {
      name: 'IOS',
      category: 'App development'
    },
    {
      name: 'Java',
      category: 'Software development'
    }
  ];

  drops = [
    {
      name: 'Android',
      category: 'Mobile Development'
    },
    {
      name: 'Mongo',
      category: 'Database'
    },
    {
      name: 'ARkit',
      category: 'Augmented Reality'
    },
    {
      name: 'React',
      category: 'Web Development'
    }
  ];

  onDrop(dropEvent: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, dropEvent.previousIndex, dropEvent.currentIndex);
  }
}

