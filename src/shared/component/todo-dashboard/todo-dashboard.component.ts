import { Component } from "@angular/core";
import { Itodo } from "src/models/todo.interface";

@Component({
    selector : "app-tododashboard",
    templateUrl : "./todo-dashboard.component.html",
    styleUrls : ["./todo-dashboard.component.scss"]
})
export class TododashboardComponent{
    todoArr : Array<Itodo> = [
        {
            todoItem : 'HTML'
        },
        {
            todoItem : "CSS"
        }
    ]

    onTodoAdd(eve : Itodo){
        this.todoArr.push(eve)
    }
}



