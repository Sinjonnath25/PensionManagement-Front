import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadharComponent } from './user/aadhar/aadhar.component';

const routes: Routes = [
  {
    path: 'aadhar',
    component: AadharComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
