import { EditBooksComponent } from './edit-books/edit-books.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    component: ListBooksComponent
  },
  {
    path: 'detail/:id',
    component: DetailBookComponent
  },
  {
    path: 'create',
    component: CreateBooksComponent
  },
   {
    path: 'edit/:id',
    component: EditBooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
