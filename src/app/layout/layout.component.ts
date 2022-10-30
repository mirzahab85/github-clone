import { Component, OnInit } from '@angular/core';
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


  navItems:NavItem[] = [{
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

  constructor() {
  }

  OnClick() {
    console.log('OnClick')
  }


  ngOnInit(): void {
  }
}
