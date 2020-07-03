import { Component, OnInit, Input} from '@angular/core';
import { AddToBagService } from '../service/add-to-bag.service';
import { AddToWishlistService } from '../service/add-to-wishlist.service';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cartCount = 0;
  wishCount = 0;
  searchText;
  isLogIn: boolean;
  constructor(private http: HttpService, public addToBagService: AddToBagService,
              public addToWishService: AddToWishlistService) { }
ngOnInit(): void {
  this.incrementBagCount();
  this.incrementWishlistCount();
  this.logincheck();
 // this.SearchBooks(this.searchText);//console.log(this.searchText);
 }

 logincheck() {
  let key = localStorage.getItem('token');
  if (key === null) {
    this.isLogIn = false;
  }
  else {
    this.isLogIn = true;
  }
}

incrementBagCount(){
  this.addToBagService.getCartBook();
  this.addToBagService.countObservable.subscribe(counts => {
    this.cartCount = counts ;
  });
}

incrementWishlistCount(){
  this.addToWishService.count.subscribe(counts => {
    this.wishCount = counts;
  });
  this.wishCount = this.wishCount[0];
}
// searchBooks(searchtext){
//    console.log("Search text: ", searchtext);
//    this.searchKeyService.searchBook(searchtext);

// }
logOut(){
  localStorage.removeItem('token');
  this.isLogIn = false ;
}
}
