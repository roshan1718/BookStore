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
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [{path: '', component: GetBookDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'success', component: PlaceOrderComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
    ]
  },
  {
    path: 'cart', component: CartComponent,
    children: [{path: 'cart', component: CustomerDetailsComponent,
    children: [{path: 'cart', component: OrderSummaryComponent}] }]
  },
  {
    path: 'success', component: PlaceOrderComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
