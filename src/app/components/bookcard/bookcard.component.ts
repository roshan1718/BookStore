import { Component, OnInit, Input } from '@angular/core';
import { AddToBagService } from 'src/app/service/add-to-bag.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Cart } from 'src/app/model/cart';
import { HttpService } from 'src/app/service/http.service';

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
  books = [] ;

  constructor(public addToBag: AddToBagService, public sanitizer: DomSanitizer, public httpService: HttpService) { }

  ngOnInit(): void {
    this.imageUrl = this.book.image;
    this.getImageUrl();
  }
  colorChange() {
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
   // console.log(this.count);
    this.isDisabled = true;
  }

  addToCart(){
  var cartObj = new Cart(this.userId, this.book.id, this.bookQuantity);
   this.httpService.addToCart(cartObj).subscribe(data => {

   });
   console.log('Book added to cart');
   console.log(cartObj);
 }
 
}
