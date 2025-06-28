import { Component, Input } from "@angular/core";
import { Ibook } from "src/models/books,interface";


@Component({
    selector : "app-booksTable",
    templateUrl : "./books-table.component.html",
    styleUrls : ["./books-table.component.scss"]
})
export class BookTableComponent{
  @Input() booksTable !: Array<Ibook>
}