import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetBookDetailsComponent } from './components/get-book-details/get-book-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [{path: '', component: GetBookDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'success', component: PlaceOrderComponent},
    {path: 'wishlist', component: WishlistComponent},
    ]
  },
  {
    path: 'cart', component: CartComponent,
    children: [{path: 'cart', component: CustomerDetailsComponent,
    children: [{path: 'cart', component: OrderSummaryComponent}] }]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'forget-password', component: ForgetPasswordComponent
  },
  {
    path: 'reset-password', component: ResetPasswordComponent
  },
  {path: 'cust', component: CustomerDetailsComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
