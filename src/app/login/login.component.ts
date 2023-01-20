import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../shared/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup = new FormBuilder().group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  })

  users:any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  public submit(): void {
    if (this.loginFormGroup.invalid) {
      return;
    }
    const credetials: { password: string; username: string } = this.loginFormGroup.value;
    console.log(credetials);
    const loggedUser = this.users.find((user:any) => {
      return credetials.username === user.username && credetials.password === user.password;
    })
    if (!!loggedUser ) {
      this.authService.isLogedIn = false;
      this.router.navigate(['/']);
    } else {
      alert('Invalid username or password');
    }
  }
}
