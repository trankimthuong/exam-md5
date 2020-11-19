import { BookService } from './../service/book-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {

  id: number = parseInt(this.actRoute.snapshot.params.id);
  book: any = {
    title: '',
    author: '',
    description: ''
  }

  constructor(public router: Router, private service: BookService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.book = this.getDataById(this.id);
  }

  getDataById(id: number) {
    this.service.detailData(id)
      .then(res => {
        this.book = res;
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

  updateData() {
    this.service.updateData(this.id, this.book)
      .then(res => {
        this.book = res;
        alert('edited successful');
        this.router.navigateByUrl('/')
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

}
