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
  page ;
  pages: Array<number>;
  totalPages;
  previous;
  next;
  current;
  constructor(private httpservice: HttpService) { }

    ngOnInit(): void {
      this.getBooks(0);
    }
  

    pageSelect(i, event){
      console.log("I>>>", i);
      this.page = i;
      event.preventDefault();
      this.current = event.srcElement.innerHTML;
      console.log('current page', this.current);
      this.getBooks(event.srcElement.innerHTML);
    }

    previousPage()
    {
      this.previous = --this.current;
      console.log('PREVIOUS ', this.previous);
    }
    nextPage(){
     this.next = ++this.current ;
      console.log('NEXT: ', this.next);
    }
    public getBooks(pageNumber){
      this.httpservice.getCall('/book-store/home' + '?page=' + (pageNumber - 1) + '&size=12'
      ).subscribe(data  => {
        this.bookArray = data.content;
        this.pages = new Array(data.totalPages);
        });
      }

    sort(order){
      switch (order.target.value) {
          case 'Low' : {
              this.httpservice.getCall('/book-store/sort/price-ascending').subscribe(data => {
               this.bookArray = data.content;
               console.log(this.bookArray);
               });
              break;
          }
          case 'High': {
            this.httpservice.getCall('/book-store/sort/price-descending').subscribe(data => {
              this.bookArray = data.content;
              console.log(this.bookArray);
             });
            break;
          }
          case 'NewArrival': {
            this.httpservice.getCall('/book-store/sort/newest-arrival').subscribe(data => {
              this.bookArray = data.content;
              console.log(this.bookArray);
             });
            break;
          }
        }
    }
}
