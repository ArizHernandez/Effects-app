import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  {path:'home', component:ListComponent},
  {path:'user/:id', component:UserComponent},
  {path:'**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
