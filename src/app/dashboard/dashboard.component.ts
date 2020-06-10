import { Component, OnInit} from '@angular/core';
import { BookcartComponent } from '../components/bookcart/bookcart.component';
import { Router } from '@angular/router';
import { AddToBagService } from '../service/add-to-bag.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  count: number;

  constructor(public addToBagService: AddToBagService, public router: Router) {
  }

  ngOnInit(): void {
    this.addToBagService.count.subscribe(counts => {
      this.count = counts;
    });
    this.count = this.count[0]; // By Default 0
  }
}
