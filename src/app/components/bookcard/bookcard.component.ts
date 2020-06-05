import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss']
})
export class BookcardComponent implements OnInit {
  @Input() book: any;

  toggle: boolean;

colorChange(){
  this.toggle = true;
}
  constructor() { }

  ngOnInit(): void {
  }
}
