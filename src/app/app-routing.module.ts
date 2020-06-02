import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetBookDetailsComponent } from './components/get-book-details/get-book-details.component';
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [{path: '', component: GetBookDetailsComponent}]

  },
  {
    path: 'cart', component: CartComponent

  },
  {
    path: 'place-order', component: PlaceOrderComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
