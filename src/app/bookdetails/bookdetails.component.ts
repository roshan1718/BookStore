import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookdetailsComponent implements OnInit {
  @Input() book : any;
// @Output() bookDetails = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  

}
