import { Component, Input } from "@angular/core";
import { Itodo } from "src/models/todo.interface";

@Component({
    selector : "app-todolist",
    templateUrl : "./todo-list.component.html",
    styleUrls : ["./todo-list.component.scss"]
})
export class TodoListComponent{
  @Input()  todoList !: Array<Itodo> 
}