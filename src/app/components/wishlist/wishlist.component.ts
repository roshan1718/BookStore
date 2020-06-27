import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Wishlist } from 'src/app/model/wishlist';
import { DomSanitizer } from '@angular/platform-browser';
import { Cart } from 'src/app/model/cart';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  books = [];
  userId = 1;
  bookQuantity = 1;
  imageUrl: string;
  constructor(private snackBar: MatSnackBar, public httpService: HttpService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getBooksFromWishlist(this.userId);
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
  getBooksFromWishlist(userId) {
    this.httpService.getAllBooks('/home/wishlist/get-all/').subscribe(data => {
      this.books = data;
      this.userId = userId;
    });
  }
  removeFromWishList(book) {
    var cartObj = new Wishlist(book.id);
    this.httpService.postBook(cartObj, '/home/wishlist/remove-from-wishlist').subscribe(data => {
      this.getBooksFromWishlist(this.userId);
    });
   }
  addToCart(book) {
      var cartObj = new Cart(book.id, this.bookQuantity);
      this.httpService.postBook(cartObj, '/home/cart/add-to-cart').subscribe(data => {
      });
   }

}
