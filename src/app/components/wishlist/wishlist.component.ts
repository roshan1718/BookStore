import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Wishlist } from 'src/app/model/wishlist';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  books = [];
  userId = 1;
  imageUrl: string;
  constructor( public httpService: HttpService, public sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
     this.getBooksFromWishlist(this.userId);
    
  }
  getImageUrl(book) {
    this.imageUrl = book.image;
    if (this.imageUrl != null) {
      var firstReplacement = this.imageUrl.replace("'", '');
      return this.sanitizer.bypassSecurityTrustUrl(firstReplacement.replace("'", ''));
    }
  }
  getBooksFromWishlist(userId){
    this.httpService.getBooksFromWishlist(userId).subscribe(data => {
      this.books = data;
      this.userId = userId;
      console.log('Data get in wishlist', data);
    });
    console.log(userId);
  }
  removeFromWishList(book){
    var cartObj = new Wishlist(this.userId , book.id);
    this.httpService.removeFromWishlist(cartObj).subscribe(data =>
    {
      this.getBooksFromWishlist(this.userId);
    });
    console.log('book remove from cart');
  }
}
