import { Component, OnInit, Input } from '@angular/core';
import { AddToBagService } from 'src/app/service/add-to-bag.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-bookcart',
  templateUrl: './bookcart.component.html',
  styleUrls: ['./bookcart.component.scss']
})
export class BookcartComponent implements OnInit {
  @Input() book: any;
  toggle: boolean;
  count: number;
  isDisabled = false;
  imageUrlNotSanitized: SafeUrl;
  imageUrl: string;
colorChange(){
  this.toggle = true;
}
constructor(public addToBag: AddToBagService, public sanitizer: DomSanitizer) {
 }

  ngOnInit(): void {
    this.imageUrl = this.book.image;
    this.imageUrlNotSanitized = this.sanitizer.bypassSecurityTrustUrl(this.imageUrl);
    // console.log(this.imageUrlNotSanitized);
    // console.log(this.book.image);
    console.log(this.imageUrl);
  }
  incrementBagCnt() {
    this.addToBag.incrementBagCnt();
    console.log(this.count);
    this.isDisabled = true;
}
getImageUrl() {
  return this.sanitizer.bypassSecurityTrustUrl(this.book.image);

}
}
