import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent 

  },
  {
    path: '', component:  BookdetailsComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
