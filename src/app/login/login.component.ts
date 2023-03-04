import { UserService } from './../shared/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../shared/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

@Input() login = 'loginPage';
@Output() newLoginEvent = new EventEmitter<boolean>();


  public loginFormGroup: FormGroup = new FormBuilder().group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  })

  users:any[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users:any[])=>{
    this.users=users;
    });
  }

  public submit(): void {
    if (this.loginFormGroup.invalid) {
      return;
    }
    const credetials: { password: string; username: string } = this.loginFormGroup.value;

    console.log(credetials);
    const loggedUser = this.users.find((user:any) => {
      return credetials.username === user.username || credetials.password === user.password;
    })
    if (!!loggedUser ) {
      this.authService.isLogedIn = true;
      if (this.login === 'dialogPage') {
        this.newLoginEvent.emit(true)
      }
      else {
        this.router.navigate(['/']);
      }
    } else {
      alert('Invalid username or password');
    }


  }
  onKeyPress(event: KeyboardEvent) {
    if(event.key === "Enter") {
      this.submit();
    }

  }

}
