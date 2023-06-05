import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  todForm!: FormGroup; // FormGroup for adding new tasks
  task: ITask[] = []; // Array for tasks in the "To Do" card
  inprogress: ITask[] = []; // Array for tasks in the "In Progress" card
  done: ITask[] = []; // Array for tasks in the "Done" card
  updateId: number | undefined; // Index of the task being edited
  isEditEnabled = false; // Flag indicating whether task editing is enabled
  isNormalPointer = false; // Flag indicating the type of cursor during dragging (not implemented)
  items: string[] = ['Apple', 'Banana', 'Orange']; // Array with static values
  checklistFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todForm = this.fb.group({
      item: [''], // Initialize FormGroup for task input
    });

    this.checklistFormGroup = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, []],
      sections: this.fb.array([]),
    });
    const sectionFormGroup = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, []],
      checks: this.fb.array([]),
    });
    const checkFormGroup = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, []],
      mandatory: [false, []],
    });
    (sectionFormGroup.controls['checks'] as FormArray).setControl(0, checkFormGroup);
    (this.checklistFormGroup.controls['sections'] as FormArray).setControl(0, sectionFormGroup);
  }

  public get sectionsFormArray(): FormArray {
    return (this.checklistFormGroup.controls['sections'] as FormArray) as FormArray
  }

  public get itemValue() {
    return this.itemFormControl.value;
  }
  public get itemFormControl() {
    return this.todForm.controls['item'] as FormControl;
  }

  resetItemValue() {
    return this.itemFormControl.reset();
  }

  // Adds a new task to the "To Do" card
  addTask(): void {
    this.task.push({
      description: this.todForm.value.item,
      done: false,
    });
  }

  // Enables editing of a task
  onEdit(item: ITask, i: number): void {
    this.todForm.controls['item'].patchValue(item.description);
    this.updateId = i;
    this.isEditEnabled = true;
    console.log(item);
  }

  // Updates task data after editing
  onUpdateTask(): void {
    this.task[this.updateId!].description = this.todForm.value.item;
    this.task[this.updateId!].done = false;
    this.todForm.reset();
    this.updateId = undefined;
    this.isEditEnabled = false;
  }

  // Deletes a task from the "To Do" card
  deleteTask(i: number): void {
    this.task.splice(i, 1);
  }

  // Deletes all tasks from all cards
  deleteAll(): void {
    this.task = [];
    this.inprogress = [];
    this.done = [];
  }

  // Sorts tasks in the "To Do" card alphabetically
  sortTask(): void {
    this.task.sort((a, b) => a.description.localeCompare(b.description));
  }

  // Sorts tasks in the "In Progress" card alphabetically
  sortInProgress(): void {
    this.inprogress.sort((a, b) => a.description.localeCompare(b.description));
  }

  // Sorts tasks in the "Done" card alphabetically
  sortDone(): void {
    this.done.sort((a, b) => a.description.localeCompare(b.description));
  }

  // Method invoked when a task is dragged and dropped onto another card
  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      // Sort tasks in the corresponding card
      if (event.container.id === 'task') {
        this.sortTask();
      } else if (event.container.id === 'inprogress') {
        this.sortInProgress();
      } else if (event.container.id === 'done') {
        this.sortDone();
      }
    } else {
      // If the task is moved to another card
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      // Sort tasks in both cards
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

      // Additionally, sort tasks in all cards for consistency
      this.sortTask();
      this.sortInProgress();
      this.sortDone();
    }
  }

  // Adds a new item to the "To Do" card
  addItem(): void {
    this.task.push({
      description: 'New Item',
      done: false,
    });
  }

  // Removes the last item from the "To Do" card
  removeItem(): void {
    this.task.pop();
  }

  // Removes the first item from the "To Do" card
  removefirstItem(): void {
    if (this.task.length > 0) {
      this.task.shift();
    }
  }
}
