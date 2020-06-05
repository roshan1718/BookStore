import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookcart',
  templateUrl: './bookcart.component.html',
  styleUrls: ['./bookcart.component.scss']
})
export class BookcartComponent implements OnInit {
  @Input() book: any;

  toggle: boolean;

colorChange(){
  this.toggle = true;
}
  constructor() { }

  ngOnInit(): void {
  }

}
