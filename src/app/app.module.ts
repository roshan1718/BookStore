import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportModule } from 'src/import.module';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
