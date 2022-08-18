import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AadharComponent} from './aadhar/aadhar.component';
import {AmountComponent} from './amount/amount.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../util/auth.guard';

const routes: Routes = [
  {path:'userlogin', component:LoginComponent},
  {path:'aadhar', component:AadharComponent, canActivate:[AuthGuard]},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent},
  {path:'pension-details', component:AmountComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
