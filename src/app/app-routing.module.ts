import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'test', loadChildren: ()=> import('./pages/repository-details/repository-details.module').then((m)=>{return m.RepositoryDetailsModule}) },
  {path: '', loadChildren: ()=> import('./pages/repository-details/repository-details.module').then((m)=>{return m.RepositoryDetailsModule}) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
