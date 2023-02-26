import { Validators, FormBuilder } from '@angular/forms';
import { LoginComponent } from './../login/login.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {

  loginData: any;
  currentLogin = 'dialogPage';

  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.loginData = new FormBuilder().group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onClose($event: any) {
    console.log($event)
    this.dialogRef.close();
  }
}
