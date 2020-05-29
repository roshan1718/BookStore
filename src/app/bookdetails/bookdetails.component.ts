import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cards = [
    {
     author: "Chetan Bhagat",
       title: " The Girl in Room 105",
       img: 'https://books.google.com/books/content?id=GHt_uwEACAAJ&printsec=frontcover&img=1&zoom=5',
      price: 193
    },
    {
      author: "Rujuta Divekar",
      title: " Indian Superfoods",
      img: "https://books.google.com/books/content?id=4oFoDwAAQBAJ&printsec=frontcover&img=1&zoom=5",
      price: 495
    },
    {
      author: "Dan Brown",
      title: "Angels And Demons",
      img:'http://books.google.com/books/content?id=d5xgYw4Ts0gC&printsec=frontcover&img=1&zoom=5',
      price: 218
    },
    {
      author: "Rujuta Divekar",
      title: " Indian Superfoods",
      img: "https://books.google.com/books/content?id=4oFoDwAAQBAJ&printsec=frontcover&img=1&zoom=5",
      price: 495
    },
    {
      author: "Dan Brown",
      title: "Angels And Demons",
      img:'http://books.google.com/books/content?id=d5xgYw4Ts0gC&printsec=frontcover&img=1&zoom=5',
      price: 218
    },
  ];

}
