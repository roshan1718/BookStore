import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Cart } from 'src/app/model/cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() book: any;
  public isClicked: boolean;
  public isButtonVisible = true;
  public amount: number;
  books = [];
  userId = 1;
  public cartObj = new Cart(1, 101, 1);
  constructor( public httpService: HttpService ) { }

  ngOnInit(): void {
    this.isClicked = false;
    this.getBooksFromCart(this.userId);
  }
  add() {
    this.amount = 1;
  }
  addToCart() {
    this.amount = 1;
  }

  deleteItem(){
    this.amount = this.amount * 0;
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
  removeFromCart(userId){
    this.httpService.removeFromcart(this.userId).subscribe(data =>
     {
      console.log(data);
    });
    console.log(this.cartObj);
    console.log('book remove from cart');
  }
  getBooksFromCart(userId){
    this.httpService.getBooksFromCart(userId).subscribe(data => {
      this.books = data;
      this.userId = userId;
      console.log('Data in get card', data);
    });
    console.log(userId);
   // console.log(this.books.bookId);
  }
}
