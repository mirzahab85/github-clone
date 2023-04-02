import { UserService } from './../shared/user.service';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../shared/auth.service';
import { Router } from '@angular/router';
import { map, Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

@Input() login = 'loginPage';
@Output() newLoginEvent = new EventEmitter<boolean>();


  public loginFormGroup: FormGroup = new FormBuilder().group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  })

  private subscription : Subscription = new Subscription();
  public get users(){
    return this.userService.users$.value;
  }


  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }
  ngOnDestroy(): void {
    console.log('OnDestroy');
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.subscription.add(this.userService.getUsers().pipe(
      map((users:any[])=>{
        this.userService.users$.next(users)
      })
     ).subscribe(()=>{
    }));
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
      this.authService.isLoggedIn.next(true);
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
  onKeydown(event: KeyboardEvent) {
    if(event.key === "Enter") {
      this.submit();
      console.log(event)
    }
   }
  }
