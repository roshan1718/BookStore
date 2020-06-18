import { Component, OnInit, Input } from '@angular/core';
import { AddToBagService } from 'src/app/service/add-to-bag.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { HttpService } from 'src/app/service/http.service';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-bookcart',
  templateUrl: './bookcart.component.html',
  styleUrls: ['./bookcart.component.scss']
})
export class BookcartComponent implements OnInit {
  @Input() book: any;
  toggle: boolean;
  isDisabled: boolean;
  imageUrl: string;
  userId = 1;
  bookQuantity = 1;

books = [];
result: string;

  constructor(public addToBag: AddToBagService, public sanitizer: DomSanitizer, public httpService: HttpService) {
  }

  ngOnInit(): void {
    this.imageUrl = this.book.image;
    this.getImageUrl();
   // this.getBooksFromCart(this.userId);
  }
  buttonColorChange() {
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