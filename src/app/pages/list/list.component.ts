import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
addItem() {
throw new Error('Method not implemented.');
}
removeItem() {
throw new Error('Method not implemented.');
}
removefirstItem() {
throw new Error('Method not implemented.');
}
  todForm!: FormGroup;
  task: ITask[] = [];
  inprogress: ITask[] = [];
  done: ITask[] = [];
  updateId: number | undefined;
  isEditEnabled = false;
  isNormalPointer = false;
  items: string[] = ['Apple', 'Banana', 'Orange'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todForm = this.fb.group({
      item: ['', Validators.required]
    });
  }

  addTask(): void {
    this.task.push({
      description: this.todForm.value.item,
      done: false
    });
  }

  onEdit(item: ITask, i: number): void {
    this.todForm.patchValue({ item: item.description });
    this.updateId = i;
    this.isEditEnabled = true;
    console.log(item);
  }

  onUpdateTask(): void {
    this.task[this.updateId!].description = this.todForm.value.item;
    this.task[this.updateId!].done = false;
    this.todForm.reset();
    this.updateId = undefined;
    this.isEditEnabled = false;
  }

  deleteTask(i: number): void {
    this.task.splice(i, 1);
  }

  deleteAll(): void {
    this.task = [];
    this.inprogress = [];
    this.done = [];
  }

  sortTask(): void {
    this.task.sort((a, b) => a.description.localeCompare(b.description));
  }

  sortInProgress(): void {
    this.inprogress.sort((a, b) => a.description.localeCompare(b.description));
  }

  sortDone(): void {
    this.done.sort((a, b) => a.description.localeCompare(b.description));
  }

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (event.container.id === 'task') {
        this.sortTask();
      } else if (event.container.id === 'inprogress') {
        this.sortInProgress();
      } else if (event.container.id === 'done') {
        this.sortDone();
      }
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      switch (event.container.id) {
        case 'task':
          this.sortTask();
          break;
        case 'inprogress':
          this.sortInProgress();
          break;
        case 'done':
          this.sortDone();
          break;
      }

      this.sortTask();
      this.sortInProgress();
      this.sortDone();
    }
  }
}
