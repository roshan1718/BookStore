import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CartOrderSummaryService } from 'src/app/service/cart-order-summary.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit  {
   cartBooks = [];
   imageUrl: string;

  constructor(public cartOrderSummaryService: CartOrderSummaryService, public sanitizer: DomSanitizer, private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.cartOrderSummaryService.orderSummaryBooks.subscribe(data => {
      this.cartBooks = data;
    });
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
}
