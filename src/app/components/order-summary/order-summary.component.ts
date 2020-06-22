import { Component, OnInit } from '@angular/core';
import { CartPlaceOrderService } from 'src/app/service/cart-place-order.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit  {
   cartBooks = [];
   imageUrl: string;

    constructor(public cartPlaceOrderService: CartPlaceOrderService, public sanitizer: DomSanitizer ) { }
  ngOnInit(): void {
    this.cartPlaceOrderService.orderSummaryBooks.subscribe(data => {
      this.cartBooks = data;
    });
  }
  getImageUrl(book) {
    this.imageUrl = book.image;
    if (this.imageUrl != null) {
      var firstReplacement = this.imageUrl.replace("'", '');
      return this.sanitizer.bypassSecurityTrustUrl(firstReplacement.replace("'", ''));
    }
  }
}
