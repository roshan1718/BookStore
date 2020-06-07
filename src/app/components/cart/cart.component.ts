import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public isClicked: boolean;
  public isButtonVisible = true;
  public amount: number;

  constructor() { }

  ngOnInit(): void {
    this.isClicked = false;
  }

  addToCart() {
    this.amount = 1;
  }

  addItem() {
    this.amount = this.amount + 1;
    // console.log('plus is : ' + this.amount );
  }

  removeItem() {
    if (this.amount > 0) {
      this.amount = this.amount - 1;
    }
    else {
      this.amount = this.amount;
    }
  }
}
