import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../service/book-service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  ListBooks: any = [];
  constructor(public router: Router, private service: BookService) { }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent() {
    this.service.getData()
      .then(res => {
        this.ListBooks = res;
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }


  formDetail(id: number) {
    this.router.navigateByUrl('/detail/' + id);
  }

  formEdit(id: number) {
    this.router.navigateByUrl('/edit/' + id);
  }


  deleteBook(id: number) {
    if (confirm('Are you sure???')) {
      this.service.deleteData(id)
        .then(res => {
          // this.getAllStudent();
          this.updateList(id);
        }).catch(e => {
          window.alert('Connection Error !');
        })
    }
  }

  updateList(id: number){
    var i;
    for(i = 0; i < this.ListBooks.length; i++){
      if(this.ListBooks[i].id == id){
        this.ListBooks.splice(i, 1);
        break;
      }
    }
  }
}
