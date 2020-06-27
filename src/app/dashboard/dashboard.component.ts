import { Component, OnInit, Input} from '@angular/core';
import { AddToBagService } from '../service/add-to-bag.service';
import { AddToWishlistService } from '../service/add-to-wishlist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 cartCount = 0;
 wishCount = 0;
 searchText;
  constructor(public addToBagService: AddToBagService, public addToWishService: AddToWishlistService) { }
  ngOnInit(): void {
    this.incrementBagCount();
    this.incrementWishlistCount();
   }
  incrementBagCount(){
    this.addToBagService.count.subscribe(counts => {
      this.cartCount = counts;
    });
    this.cartCount = this.cartCount[0];
  }
  incrementWishlistCount(){
    this.addToWishService.count.subscribe(counts => {
      this.wishCount = counts;
    });
    this.wishCount = this.wishCount[0]; // By Default 0
  }
}
