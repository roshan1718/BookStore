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
      this.sortByPriceAsc();
      // this.sortByPriceDesc();
      // this.sortByNewArrival();
    }
    // To fetch all books
    public getBooks(){
      this.httpservice.getBooks().subscribe(data => {
        this.bookArray = data;
       } );
    }
    public sortByPriceAsc(){
      this.httpservice.sortByPriceAsc().subscribe(data => {
        this.bookArray = data;
        console.log(this.bookArray);
       });
    }
  public sortByPriceDesc(){
      this.httpservice.sortByPriceDesc().subscribe(data => {
        this.bookArray = data;
        console.log(this.bookArray);
       });
    }
    public sortByNewArrival(){
      this.httpservice.sortByNewArrival().subscribe(data => {
        this.bookArray = data;
        console.log(this.bookArray);
       });
    }
}
