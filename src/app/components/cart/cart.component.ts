import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Cart } from 'src/app/model/cart';
import { DomSanitizer } from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CartOrderSummaryService } from 'src/app/service/cart-order-summary.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public isClicked: boolean;
  public isButtonVisible = true;
  public amount: number;
  imageUrl: string;
  books = [];
  userId = 1;
  bookQuantity = 1;

  constructor(public cartOrderSummaryService: CartOrderSummaryService, private snackBar: MatSnackBar,
              public httpService: HttpService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.isClicked = false;
    this.getBooksFromCart();
  }

  openSnackBar(message: string, action: string) {
     this.snackBar.open(message, action, {
        duration: 2000,
     });
  }
  getImageUrl(book) {
    this.imageUrl = book.image;
    if (this.imageUrl != null) {
      var firstReplacement = this.imageUrl.replace("'", '');
      return this.sanitizer.bypassSecurityTrustUrl(firstReplacement.replace("'", ''));
    }
  }

  addItem() {
    this.bookQuantity = this.bookQuantity + 1;
  }

  removeItem() {
    if (this.bookQuantity > 0) {
      this.bookQuantity = this.bookQuantity - 1;
    }
    else {
      this.bookQuantity = this.bookQuantity;
    }
  }
  getBooksFromCart(){
    this.httpService.getAllBooks( '/home/cart/getall/').subscribe(data => {
      this.books = data;

      this.cartOrderSummaryService.getBooksFromCart(this.books);
      console.log('Data in get card', data);
    });
  }

  removeFromCart(book){
    var cartObj = new Cart(book.id, this.bookQuantity);
    this.httpService.postBook(cartObj, '/home/cart/remove-from-cart').subscribe(data => {
     this.getBooksFromCart();
    });
   // console.log('Book removed from cart');
  }
}
