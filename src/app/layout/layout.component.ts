import { LoginComponent } from './../login/login.component';
import { Router } from '@angular/router';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


interface NavItem {
  name: string,
  route?: string,
  children?: NavItem[]
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  loginStatus: boolean = false;

  navItems: NavItem[] = [{
    name: 'Product',
    children: [{ name: 'Item 1', route: '/' }, { name: 'Item 2', route: '/test' },]
  },
  {
    name: 'Solutions',
    children: [{ name: 'Item 3' }, { name: 'Item 4' },]
  },
  {
    name: 'Open Source',
    children: [{ name: 'Item 4' }, { name: 'Item 5' }]
  },
  {
    name: 'Pricing',
  },
  ];

  constructor(private authService: AuthService, private router: Router, private matdialog: MatDialog) {
    this.loginStatus = this.authService.isLogedIn

  }

  OnClick() {
    console.log('OnClick')
  }

  logout() {
    this.authService.isLogedIn = false;
    this.router.navigate(['/login']);
  }

  signIn() {
    this.matdialog.open(LoginComponent, {

      
    }
    )
  }


  ngOnInit(): void {
  }
}
