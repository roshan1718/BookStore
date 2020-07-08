import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportModule } from 'src/import.module';
import { GetBookDetailsComponent } from './components/get-book-details/get-book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './components/cart/cart.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { BookcardComponent } from './components/bookcard/bookcard.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { Four04ComponentComponent } from './components/four04-component/four04-component.component';
import { ActivateGuard } from './activate.guard';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GetBookDetailsComponent,
    CartComponent,
    PlaceOrderComponent,
    BookcardComponent,
    CustomerDetailsComponent,
    OrderSummaryComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    WishlistComponent,
    ResetPasswordComponent,
    Four04ComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImportModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ ActivateGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
