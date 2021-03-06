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
import { Four04ComponentComponent } from './components/four04-component/four04-component.component';
import { ActivateGuard } from './activate.guard';
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [{path: '', component: GetBookDetailsComponent},
    {path: 'cart', component: CartComponent, canActivate: [ActivateGuard]},
    {path: 'success', component: PlaceOrderComponent, canActivate: [ActivateGuard]},
    {path: 'wishlist', component: WishlistComponent, canActivate: [ActivateGuard]},
    ]
  },
  {
    path: 'cart', component: CartComponent,
    children: [{path: 'cart', component: CustomerDetailsComponent, canActivate: [ActivateGuard],
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
    path: 'resetpassword', component: ResetPasswordComponent
  },

  { path: '**', component: Four04ComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
