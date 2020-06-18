import { Component, OnInit, Input} from '@angular/core';
import { AddToBagService } from '../service/add-to-bag.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 count = 0;
  constructor(public addToBagService: AddToBagService) { }
  ngOnInit(): void {
    this.addToBagService.count.subscribe(counts => {
      this.count = counts;
    });
    this.count = this.count[0]; // By Default 0
   // console.log(this.count);
  }

}
