import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

interface PeriodicElement {
  cls?: any,
  icon: string;
  name: string;
  commits: string;
  update: string;
  initIcon?: Function;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { cls: 'fa-solid', icon: "fa-folder", name: '.vscode', commits: 'initial commit', update: '2 mouths ago',  },
  { cls: 'fa-solid', icon: "fa-folder",  name: 'src', commits: 'Error with duplicate font awesome icon in table', update: '2 days ago' },
  { cls: 'fa-regular', icon: "fa-file", name: '.browserslistrc', commits: 'initial commit', update: '2 months ago',  },
  { cls: 'fa-regular', icon: "fa-file",  name: '.editorconfig', commits: 'initial commit', update: '2 months ago' },
  { cls: 'fa-regular', icon: "fa-file",  name: '.gitignore', commits: 'initial commit', update: '2 months ago' },
  { cls: 'fa-regular', icon: "fa-file", name: 'README.md', commits: 'initial commit', update: '2 months ago',  },
  { cls: 'fa-regular', icon: "fa-user",  name: 'angular.json', commits: 'Creating font awesome', update: '4 days ago' },
  { cls: 'fa-regular', icon: "fa-file",  name: 'karma.conf.js', commits: 'initial commit', update: '2 months ago' },
  { cls: 'fa-regular', icon: "fa-file",  name: 'package-lock.json', commits: 'Creating font awesome', update: '4 days ago' },
  { cls: 'fa-regular', icon: "fa-file",  name: 'package.json', commits: 'Creating font awesome', update: '4 days ago' },
  { cls: 'fa-regular', icon: "fa-file",  name: 'tsconfig.app.json', commits: 'initial commit', update: '2 months ago' },
  { cls: 'fa-regular', icon: "fa-file",  name: 'tsconfig.json', commits: 'initial commit', update: '2 months ago' },
  { cls: 'fa-regular', icon: "fa-file",  name: 'tsconfig.spec.json', commits: 'initial commit', update: '2 months ago' },
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['icon',  'name', 'commits', 'update', ];
  dataSource = ELEMENT_DATA;
  numbers: number[];

  constructor(faConfig: FaConfig){
    faConfig.defaultPrefix = 'far';
    faConfig.fixedWidth = true;
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
  }

}
