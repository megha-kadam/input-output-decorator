import { Component } from "@angular/core";
import { bookCollection } from "src/const/books";
import { Ibook } from "src/models/books,interface";

@Component({
    selector : "app-booksdashboard",
    templateUrl : "./books-dashboard.component.html",
    styleUrls : ["./books-dashboard.component.scss"]
})
export class BooksComponent{
    booksArr : Array<Ibook> = bookCollection;
    
    addbookobj(eve : Ibook){
        this.booksArr.push(eve)
    }
}