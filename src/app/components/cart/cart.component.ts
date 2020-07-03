import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Cart } from 'src/app/model/cart';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartOrderSummaryService } from 'src/app/service/cart-order-summary.service';
import { Router } from '@angular/router';
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
  isExist;
  total;

  constructor(public cartOrderSummaryService: CartOrderSummaryService, private snackBar: MatSnackBar,
              public httpService: HttpService, public sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
    this.isClicked = false;
    this.logincheck();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  getImageUrl(book) {
    this.imageUrl = book.image;
    if (this.imageUrl != null) {
      const firstReplacement = this.imageUrl.replace('\'', '');
      return this.sanitizer.bypassSecurityTrustUrl(firstReplacement.replace('\'', ''));
    }
  }

  addItem(id) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id && this.books[i].bookQuantity < 10) {
        this.books[i].bookQuantity += 1;
      }
    }
    this.totalPrice();
  }

  removeItem(id) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id && this.books[i].bookQuantity > 0) {
        this.books[i].bookQuantity -= 1;
      }
    }
    this.totalPrice();
  }
  totalPrice() {
    this.total = 0;
    // tslint:disable-next-line: prefer-for-of
    for (var i = 0; i < this.books.length; i++) {
      this.total += (this.books[i].price * this.books[i].bookQuantity);
    }
    this.cartOrderSummaryService.getTotalPrice(this.total);
  }

  logincheck() {
    let key = localStorage.getItem('token');
    console.log('generated key ', key);
    if (key === null) {
       alert('you dont have permission to view this page, go to login');
       this.router.navigate(['login']);
    }
    else {
      this.getBooksFromCart();
    }
  }
  getBooksFromCart() {
    this.httpService.getAllBooks('/home/cart/getall/').subscribe(data => {
      this.books = data;
      this.cartOrderSummaryService.getBooksFromCart(this.books);
    });
  }
  removeFromCart(book) {
    const cartObj = new Cart(book.id, this.bookQuantity);
    this.httpService.postBook(cartObj, '/home/cart/remove-from-cart').subscribe(data => {
      this.getBooksFromCart();
    });
  }

  isCustomerExist() {
    this.httpService.getAllBooks('/customer-details/isexisted').subscribe(data => {
      this.isExist = data;
    });
  }
}
