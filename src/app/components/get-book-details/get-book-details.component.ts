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

  constructor(private httpservice: HttpService) { }

    ngOnInit(): void {
      this.getBooks();
    }

    public getBooks(){
      this.httpservice.getCall('/book-store/home').subscribe(data => {
        this.bookArray = data;
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
