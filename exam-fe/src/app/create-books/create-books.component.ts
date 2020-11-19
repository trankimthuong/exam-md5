import { Book } from './../book';
import { BookService } from './../service/book-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {

  book!: Book;
  title!: string;
  author!: string;
  description!: string;
  constructor(public router: Router,private service: BookService) { }

  ngOnInit(): void {
  }

  createBook() {
    this.book = new Book(this.title, this.author, this.description);
    this.service.createData(this.book) .then(res => {
      res = this.book;
      alert('created successful');
      this.router.navigateByUrl('/')
    }).catch(e => {
      window.alert('Connection Error !');
    });
  }

}
