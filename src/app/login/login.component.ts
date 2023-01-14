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


  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    const user = {
      username: String,
      password: String
    }
  }

  public submit(): void {
    if (this.loginFormGroup.invalid) {
      return;
    }
    const credetials: { password: string; username: string } = this.loginFormGroup.value;
    console.log(credetials);
    this.authService.isLogedIn = true;
    this.router.navigate(['/']);
  }
}
