import { Component, OnInit, Input, Output } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { HttpService } from 'src/app/service/http.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
books = [];
userId = 1;
 public isClicked: boolean;
 public amount: number;
 public cartObj = new Cart(1, 101, 1);
 result: string;

  constructor( public httpService: HttpService) { }

  ngOnInit(): void {
     this.isClicked = false;
     this.getBooksFromCart(this.userId);
  }
  add() {
    this.amount = 1;
  }

  addItem() {
    this.amount = this.amount + 1;
    // console.log('plus is : ' + this.amount );
  }

  removeItem() {
    if (this.amount > 0) {
      this.amount = this.amount - 1;
    }
    else {
      this.amount = this.amount;
    }
  }
  removeFromCart(cartObj){
    this.httpService.removeFromcart(this.cartObj).subscribe(data =>
     {
      this.result = data
      console.log(data);
    });
    console.log(this.cartObj);
    console.log('book remove from cart');
  }
  getBooksFromCart(userId){
    this.httpService.getBooksFromCart(userId).subscribe(data =>{
      this.books = data;
      this.userId = userId;
      console.log('Data in get card', data);
    });
    console.log(userId);
   // console.log(this.books.bookId);
  }
}
