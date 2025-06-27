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

@NgModule({
  declarations: [
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
