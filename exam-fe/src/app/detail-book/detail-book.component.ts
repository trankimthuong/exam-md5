import { BookService } from './../service/book-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  constructor(public router: Router, private service: BookService, private actRoute: ActivatedRoute) { }

  id: number = parseInt(this.actRoute.snapshot.params.id);
  book: any;

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
}
