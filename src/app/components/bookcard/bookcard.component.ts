import { Component, OnInit, Input } from '@angular/core';
import { AddToBagService } from 'src/app/service/add-to-bag.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Cart } from 'src/app/model/cart';
import { HttpService } from 'src/app/service/http.service';
import { Wishlist } from 'src/app/model/wishlist';
import { AddToWishlistService } from 'src/app/service/add-to-wishlist.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss']
})
export class BookcardComponent implements OnInit {
  @Input() book: any;
  toggle: boolean;
  isDisabled: boolean;
  imageUrl: string;
  userId = 1;
  bookQuantity = 1;


  constructor(public addToBag: AddToBagService, public addToWish: AddToWishlistService,
              public sanitizer: DomSanitizer, public httpService: HttpService, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.imageUrl = this.book.image;
    this.getImageUrl();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 2000,

    });
 }
  sizeChange() {
    this.toggle = true;
  }
  getImageUrl() {
    if (this.imageUrl != null) {
      var firstReplacement = this.imageUrl.replace("'", '');
      return this.sanitizer.bypassSecurityTrustUrl(firstReplacement.replace("'", ''));
    }
  }
  incrementBagCnt() {
    this.addToBag.incrementBagCnt();
    this.isDisabled = true;
  }
  incrementWishlistCnt() {
    this.addToWish.incrementWishlistCnt();
    this.isDisabled = true;
  }

  addToCart(){
  var cartObj = new Cart(this.book.id, this.bookQuantity);
  this.httpService.postBook(cartObj, '/home/cart/add-to-cart').subscribe(data => {
  });
  console.log('Book added to cart' );
  console.log(cartObj);
 }
 addToWishlist(){
  var cartObj = new Wishlist(this.book.id);
  this.httpService.postBook(cartObj, '/home/wishlist/add-to-wishlist').subscribe(data => {
    console.log('data in wishlist', data);
  });
  console.log('Book added to wishlist');
}
}
