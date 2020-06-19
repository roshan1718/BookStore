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
export class CartComponent implements OnInit, AfterViewInit {
// @ViewChild(GetBookDetailsComponent) Books;
// @Input() book: any;
//book = []
 public isClicked: boolean;
 public isButtonVisible = true;
 public amount: number;
 books : any;
 userId = 1;
 // public cartObj = new Cart(1, 101, 1);
 constructor( public httpService: HttpService ) { }

 ngOnInit(): void {
   this.isClicked = false;
   this.getBooksFromCart(this.userId);
 }
 ngAfterViewInit() {
  // this.book = this.Books.bookArray;
  // this.message = this.child.message

}
 add() {
   this.amount = 1;
 }
 addToCart() {
   this.amount = 1;
 }

 deleteItem(){
   this.amount = this.amount * 0;
 }
 addItem() {
   this.amount = this.amount + 1;
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
   this.httpService.getBooksFromCart(userId).subscribe(data => {
     this.books = data;
     this.userId = userId;
     console.log('Data in get card', data);
    // console.log('>>>',this.books.id);
   });
   console.log(userId);
 }
  removeFromCart(book){
    var cartObj = new Cart(this.userId, book.id, 1);
    this.httpService.removeFromcart(cartObj).subscribe(data => {
     // this.userId = userId
     this.getBooksFromCart(this.userId);
    });
    console.log('Book removed from cart');
  }
}
