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
  i: number = 0;
  //item: ITask = { description: '', done: false }; -
  updateId!:any;
  isEditEnabled: boolean = false;
  isNormalPointer: boolean = false;



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

  onEdit(item:ITask, i : number){
    this.todForm.patchValue({ item: item.description });
    this.updateId = i;
    this.isEditEnabled = true;
    console.log(item);
  }

  onUpdateTask() {
    this.task[this.updateId].description = this.todForm.value.item;
    this.task[this.updateId].done = false;
    this.todForm.reset();
    this.updateId=undefined;
    this.isEditEnabled = false;
  }

  deleteTask(i: number){
    this.task.splice(i, 1)
  }

  deleteAll() {
    this.task = [];
    this.inprogress = [];
    this.done = [];
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

  toggleNormalPointer() {
    this.isNormalPointer = !this.isNormalPointer;
  }
}

