import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CartPlaceOrderService {
  books: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  orderSummaryBooks = this.books.asObservable();
  constructor(public httpService: HttpService) { }

  getBooksFromCart(bookList){
    this.books.next(bookList);
   }
}
