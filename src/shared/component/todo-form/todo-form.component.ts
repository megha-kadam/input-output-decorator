import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Itodo } from "src/models/todo.interface";

@Component({
    selector : "app-todoform",
    templateUrl : "./todo-form.component.html",
    styleUrls : ["./todo-form.component.scss"]
})
export class TodoformComponent{
    @Output() addTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()

    @ViewChild("todoItem") todoItem !: ElementRef
    constructor(){

    }
    onAddTodo(){
        let todoObj : Itodo = {
            todoItem : this.todoItem.nativeElement.value
        }
        console.log(todoObj);
        this.addTodo.emit(todoObj)

        this.todoItem.nativeElement.value = ""
    }
}