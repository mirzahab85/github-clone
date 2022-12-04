import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'test', loadChildren: ()=> import('./pages/repository-details/repository-details.module').then((m)=>{return m.RepositoryDetailsModule}) },
  {path: '', loadChildren: ()=> import('./pages/repository-details/repository-details.module').then((m)=>{return m.RepositoryDetailsModule}) },
  {path:'code', loadChildren: ()=> import('./pages/code/code.module').then((m)=>{return m.CodeModule})},
  {path:'adjust', loadChildren: ()=> import('./pages/adjust/adjust.module').then((m)=>{return m.AdjustModule})},
  {path:'pull_requests', loadChildren: ()=> import('./pages/pull-requests/pull-requests.module').then((m)=>{return m.PullRequestsModule})},
  {path:'actions', loadChildren: ()=> import('./pages/actions/actions.module').then((m)=>{return m.ActionsModule})},
  {path:'security', loadChildren: ()=> import('./pages/security/security.module').then((m)=>{return m.SecurityModule})},
  {path:'insights', loadChildren: ()=> import('./pages/insights/insights.module').then((m)=>{return m.InsightsModule})},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
