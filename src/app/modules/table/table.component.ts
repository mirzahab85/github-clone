import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';



interface PeriodicElement {

  icon: string;
  name: string;
  weight: number;
  symbol: string;
  initIcon?: Function;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { icon: "folder", name: '.vscode', weight: 1.0079, symbol: 'H',  },
  { icon: "folder",  name: 'src', weight: 4.0026, symbol: 'He' },
  { icon: "folder ", name: 'Hydrogen', weight: 1.0079, symbol: 'H',  },
  { icon: "",  name: 'Helium', weight: 4.0026, symbol: 'He' },
  { icon: "home", name: 'Hydrogen', weight: 1.0079, symbol: 'H',  },
  { icon: "home",  name: 'Helium', weight: 4.0026, symbol: 'He' },
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['icon',  'name', 'weight', 'symbol', ];
  dataSource = ELEMENT_DATA;
  numbers: number[];
  faCoffee = faCoffee



  constructor(library: FaIconLibrary){
    library.addIcons(faCoffee);
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
  }

}
