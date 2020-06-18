import { Component, OnInit, Input, Output, SimpleChanges, AfterViewInit, ViewChild } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { HttpService } from 'src/app/service/http.service';
import { EventEmitter } from 'events';
import { GetBookDetailsComponent } from '../get-book-details/get-book-details.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 // @ViewChild(GetBookDetailsComponent) Books = [];
 @Input() book: any;
  bookA = [];
  books = [];
  userId = 1;
  public isClicked: boolean;
  public amount: number;

  constructor( public httpService: HttpService) { }

  ngOnInit(): void {
     this.isClicked = false;
     this.getBooksFromCart(this.userId);
     this.getBooksFromWishlist(this.userId);
  }
  // ngAfterViewInit(){
  //   this.bookA = this.Books.bookArray;
  // }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
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
  getBooksFromCart(userId){
    this.httpService.getBooksFromCart(userId).subscribe(data =>{
      this.books = data;
      this.userId = userId;
      console.log('Data get in card', data);
    });
    console.log(userId);
   // console.log(this.books.bookId);
  }
  getBooksFromWishlist(userId){
    this.httpService.getBooksFromWishlist(userId).subscribe(data =>{
      this.books = data;
      this.userId = userId;
      console.log('Data get in wishlist', data);
    });
    console.log(userId);
   // console.log(this.books.bookId);
  }
  removeFromCart(){
    var cartObj = new Cart(this.userId, this.book.id, 1);
    this.httpService.removeFromcart(cartObj).subscribe(data => {
     // this.userId = userId
    });
    console.log('Book removed from cart');
    console.log(cartObj);
    console.log('book Id', this.book.id);
  }
}
