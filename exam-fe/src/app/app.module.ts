import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListBooksComponent } from './list-books/list-books.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    DetailBookComponent,
    CreateBooksComponent,
    EditBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
