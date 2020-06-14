import { Component, OnInit, Input } from '@angular/core';
import { AddToBagService } from 'src/app/service/add-to-bag.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss']
})
export class BookcardComponent implements OnInit {
  @Input() book: any;
  toggle: boolean;
  count: number ;
  isDisabled: boolean;
  imageUrl: string;

  constructor(public addToBag: AddToBagService, public sanitizer: DomSanitizer) { }

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
    console.log(this.count);
    this.isDisabled = true;
  }

}
