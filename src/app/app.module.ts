import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TododashboardComponent } from 'src/shared/component/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from 'src/shared/component/todo-list/todo-list.component';
import { TodoformComponent } from 'src/shared/component/todo-form/todo-form.component';
import { StudentFormComponent } from 'src/shared/component/student-form/student-form.component';
import { StudentTableComponent } from 'src/shared/component/student-table/student-table.component';
import { StudentComponent } from 'src/shared/component/student-dashboard/student-dashboard.component';
import { PostComponent } from 'src/shared/component/post-dashboard/post-dashboard.component';
import { PostCardComponent } from 'src/shared/component/post-card/post-card.component';
import { PostFormComponent } from 'src/shared/component/post-form/post-form.component';
import { CricketerComponent } from 'src/shared/component/cricketer-dashboard/cricketer-dashboard.component';
import { CricketerTableComponent } from 'src/shared/component/cricketer-table/cricketer-table.component';
import { CricketerFormComponent } from 'src/shared/component/cricketer-form/cricketer-form.component';
import { ProductComponent } from 'src/shared/component/product-dashboard/product-dashboard.component';
import { ProductListComponent } from 'src/shared/component/product-list/product-list.component';
import { ProductFormComponent } from 'src/shared/component/product-form/product-form.component';
import { BooksComponent } from 'src/shared/component/books-dashboard/books-dashboard.component';
import { BookTableComponent } from 'src/shared/component/books-table/books-table.component';
import { BooksFormComponent } from 'src/shared/component/books-form/books-form.component';
import { MovieComponent } from 'src/shared/component/movie-dashboard/movie-dashboard.component';
import { MovieListComponent } from 'src/shared/component/movie-list/movie-list.component';
import { MovieFormComponent } from 'src/shared/component/movie-form/movie-form.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductFormComponent,
    BooksComponent,
    BookTableComponent,
    BooksFormComponent,
    MovieComponent,
    MovieListComponent,
    MovieFormComponent,
    CricketerComponent,
    CricketerTableComponent,
    CricketerFormComponent,
    PostComponent,
    PostCardComponent,
    PostFormComponent,
    StudentFormComponent,
    StudentTableComponent,
    StudentComponent,
    TododashboardComponent,
    TodoListComponent,
    TodoformComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
