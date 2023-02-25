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

  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

   ngOnInit(): void {
  }

  onSubmit(username: string, password: string) {
    const loginData = {
      username: username,
      password: password
    };

    this.dialogRef.close(LoginComponent);
}
}
