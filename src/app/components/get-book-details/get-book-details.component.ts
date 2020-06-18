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
    // To fetch all books
    public getBooks(){
      this.httpservice.getBooks().subscribe(data => {
        this.bookArray = data;
        });
    }

    sort(order){
      switch (order.target.value) {
          case 'Low' : {
              this.httpservice.sortByPriceAsc().subscribe(data => {
               this.bookArray = data.content;
               console.log(this.bookArray);
               });
              break;
          }
          case 'High': {
            this.httpservice.sortByPriceDesc().subscribe(data => {
              this.bookArray = data.content;
              console.log(this.bookArray);
             });
            break;
          }
          case 'NewArrival': {
            this.httpservice.sortByNewArrival().subscribe(data => {
              this.bookArray = data.content;
              console.log(this.bookArray);
             });
            break;
          }
        }
    }
}
