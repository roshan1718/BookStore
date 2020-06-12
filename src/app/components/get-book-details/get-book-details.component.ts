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
      price: 193,
      description : 'Im Keshav and my life is screwed. I hate my job and my girlfriend left me.the beautiful Zara. Zara is from Kashmir.She is a Muslim. And did I tell you my family is a bit welltraditional? Anyway leave that. Zara and I broke up four years ago. She moved on in life. I didnt. I drank every night to forget her. I calledIm Keshav and my life is screwed. I hate my job and my girlfriend left me.the beautiful Zara. Zara is from Kashmir.She is a Muslim. And did I tell you my family is a bit welltraditional? Anyway leave that. Zara and I broke up four years ago. She moved on in life. I didnt. I drank every night to forget her. I calledIm Keshav and my life is screwed. I hate my job and my girlfriend left me.the beautiful Zara. Zara is from Kashmir.She is a Muslim. And did I tell you my family is a bit welltraditional? Anyway leave that. Zara and I broke up four years ago. She moved on in life. I didnt. I drank every night to forget her. I calledIm Keshav and my life is screwed. I hate my job and my girlfriend left me.the beautiful Zara. Zara is from Kashmir.She is a Muslim. And did I tell you my family is a bit welltraditional? Anyway leave that. Zara and I broke up four years ago. She moved on in life. I didnt. I drank every night to forget her. I calledIm Keshav and my life is screwed. I hate my job and my girlfriend left me.the beautiful Zara. Zara is from Kashmir.She is a Muslim. And did I tell you my family is a bit welltraditional? Anyway leave that. Zara and I broke up four years ago. She moved on in life. I didnt. I drank every night to forget her. I called'

    },
    {
      author: 'Chetan Bhagat',
        title: 'The Girl in Room 105',
        img: 'https://books.google.com/books/content?id=GHt_uwEACAAJ&printsec=frontcover&img=1&zoom=5',
       price: 193,
       description : 'Im Keshav and my life is screwed. I hate my job and my girlfriend left me.the beautiful Zara. Zara is from Kashmir.She is a Muslim. And did I tell you my family is a bit welltraditional? Anyway leave that. Zara and I broke up four years ago. She moved on in life. I didnt. I drank every night to forget her. I called'
     },
    {
      author: 'Dan Brown',
      title: 'Angels And Demons',
      img: 'http://books.google.com/books/content?id=d5xgYw4Ts0gC&printsec=frontcover&img=1&zoom=5',
      price: 218
    },
    {
      author: 'Chetan Bhagat',
        title: 'The Girl in Room 105',
        img: 'https://books.google.com/books/content?id=GHt_uwEACAAJ&printsec=frontcover&img=1&zoom=5',
       price: 193
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
