import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ITask } from 'src/app/models/task';


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

  todForm !: FormGroup
  task : ITask [] = [];
  inprogress : ITask [] = [];
  done : ITask [] = [];

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todForm = this.fb.group({
      item : ['', Validators.required]
    })
  }


  addTask(){
    this.task.push({
      description: this.todForm.value.item,
      done:false
    })
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

