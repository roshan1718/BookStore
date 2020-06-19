import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Cart } from 'src/app/model/cart';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() book: any;
  public isClicked: boolean;
  public isButtonVisible = true;
  public amount: number;
  imageUrl: string;
  books = [];
  userId = 1;
  bookQuantity;

  constructor( public httpService: HttpService, public sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    this.isClicked = false;
    this.getBooksFromCart(this.userId);
  }
  getImageUrl(book) {
    this.imageUrl = book.image;
    if (this.imageUrl != null) {
      var firstReplacement = this.imageUrl.replace("'", '');
      return this.sanitizer.bypassSecurityTrustUrl(firstReplacement.replace("'", ''));
    }
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

  removeFromCart(book){
    var cartObj = new Cart(this.userId, book.id, this.bookQuantity );
    this.httpService.removeFromcart(cartObj).subscribe(data => {
     this.getBooksFromCart(this.userId);
    });
    console.log('Book removed from cart');

  }
  getBooksFromCart(userId){
    this.httpService.getBooksFromCart(userId).subscribe(data => {
      this.books = data;
      this.userId = userId;
      console.log('Data in get card', data);
    });
    console.log(userId);
  }
}
