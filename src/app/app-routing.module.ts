import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './vista/login/login.component'
import {DashboardComponent} from './vista/dashboard/dashboard.component';
import {NuevoComponent} from './vista/nuevo/nuevo.component';
const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch : 'full'
  },
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'nuevo',component:NuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[LoginComponent,DashboardComponent,NuevoComponent]
