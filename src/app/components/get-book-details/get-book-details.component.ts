import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-book-details',
  templateUrl: './get-book-details.component.html',
  styleUrls: ['./get-book-details.component.scss']
})
export class GetBookDetailsComponent implements OnInit {
  books = [
    {
     author: 'Chetan Bhagat',
       title: 'The Girl in Room 105',
       img: 'https://books.google.com/books/content?id=GHt_uwEACAAJ&printsec=frontcover&img=1&zoom=5',
      price: 193
    },
    {
      author: 'Rujuta Divekar',
      title: ' Indian Superfoods',
      img: 'https://books.google.com/books/content?id=4oFoDwAAQBAJ&printsec=frontcover&img=1&zoom=5',
      price: 495
    },
    {
      author: 'Dan Brown',
      title: 'Angels And Demons',
      img: 'http://books.google.com/books/content?id=d5xgYw4Ts0gC&printsec=frontcover&img=1&zoom=5',
      price: 218
    },
    {
      author: 'Rujuta Divekar',
      title: 'Indian Superfoods',
      img: 'https://books.google.com/books/content?id=4oFoDwAAQBAJ&printsec=frontcover&img=1&zoom=5',
      price: 495
    },
    {
      author: 'Dan Brown',
      title: 'Angels And Demons',
      img: 'http://books.google.com/books/content?id=d5xgYw4Ts0gC&printsec=frontcover&img=1&zoom=5',
      price: 218
    },
    {
      author: 'Dan Brown',
      title: 'Angels And Demons',
      img: 'http://books.google.com/books/content?id=d5xgYw4Ts0gC&printsec=frontcover&img=1&zoom=5',
      price: 218
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
