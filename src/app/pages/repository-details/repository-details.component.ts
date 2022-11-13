import { Component, OnInit } from '@angular/core';

interface PeriodicElement {

  icon: string;
  name: string;
  weight: number;
  symbol: string;
  initIcon?: Function;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { icon: "folder", name: '.vscode', weight: 1.0079, symbol: 'H',  },
  { icon: "folder",  name: 'scr', weight: 4.0026, symbol: 'He' },
  { icon: "home", name: 'Hydrogen', weight: 1.0079, symbol: 'H',  },
  { icon: "home",  name: 'Helium', weight: 4.0026, symbol: 'He' },
  { icon: "home", name: 'Hydrogen', weight: 1.0079, symbol: 'H',  },
  { icon: "home",  name: 'Helium', weight: 4.0026, symbol: 'He' },
]

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss'],
})




export class RepositoryDetailsComponent implements OnInit {
  displayedColumns: string[] = ['icon',  'name', 'weight', 'symbol', ];
  dataSource = ELEMENT_DATA;

  numbers: number[];

  constructor() {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }


  ngOnInit(): void {
  }

}


