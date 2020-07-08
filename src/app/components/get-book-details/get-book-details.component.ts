import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-get-book-details',
  templateUrl: './get-book-details.component.html',
  styleUrls: ['./get-book-details.component.scss']
})
export class GetBookDetailsComponent implements OnInit {
  bookArray = [];
  image: string;
  page;
  pages: Array<number>;
  totalPages;
  active: boolean;
  current;
  loading = true;
  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
    this.getBooks(0);
  }

  pageSelect(i) {
    this.page = i;
    event.preventDefault();
    this.current = i;
    this.getBooks(this.page);
}
  previousPage() {
    this.page = --this.current;
    this.getBooks(this.page);
  }

  nextPage() {
    this.page = ++this.current;
    this.getBooks(this.page);
  }

  public getBooks(pageNumber) {
    this.loading = true;
    this.httpservice.getCall('/book-store/home' + '?page=' + (pageNumber) + '&size=12'
    ).subscribe(data => {
      this.bookArray = data.content;
      this.totalPages = data.totalPages;
      this.pages = new Array(data.totalPages);
      this.loading = false;
    });
  }

  sort(order) {
    switch (order.target.value) {
      case 'Low': {
        this.httpservice.getCall('/book-store/sort/price-ascending').subscribe(data => {
          this.bookArray = data.content;
        });
        break;
      }
      case 'High': {
        this.httpservice.getCall('/book-store/sort/price-descending').subscribe(data => {
          this.bookArray = data.content;
        });
        break;
      }
      case 'NewArrival': {
        this.httpservice.getCall('/book-store/sort/newest-arrival').subscribe(data => {
          this.bookArray = data.content;
        });
        break;
      }
    }
  }
}
