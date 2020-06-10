import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetBookDetailsComponent } from './components/get-book-details/get-book-details.component';
import { CartComponent } from './components/cart/cart.component';
import { FormComponent } from './components/form/form.component';
import { OrderSummeryComponent } from './components/order-summery/order-summery.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { BookcartComponent } from './components/bookcart/bookcart.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [{path: '', component: GetBookDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'success', component: PlaceOrderComponent}
    ]
  },
 // {
  //  path: 'cart', component: CartComponent,
    // children: [{path: 'cart', component: FormComponent,
    // children: [{path: 'cart', component: OrderSummeryComponent}] }]
  // },
  {
    path: 'book', component: BookcartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
