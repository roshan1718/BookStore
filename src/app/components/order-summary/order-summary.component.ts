import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CartOrderSummaryService } from 'src/app/service/cart-order-summary.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit  {
   cartBooks = [];
   imageUrl: string;

  constructor(public cartOrderSummaryService: CartOrderSummaryService, public sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.cartOrderSummaryService.orderSummaryBooks.subscribe(data => {
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
