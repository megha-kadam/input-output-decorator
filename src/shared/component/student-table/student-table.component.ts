import { Component, Input, Output } from "@angular/core";
import { Istd } from "src/models/std.interface";


@Component({
    selector : "app-stdTable",
    templateUrl : "./student-table.component.html",
    styleUrls : ["./student-table.component.scss"]
})
export class StudentTableComponent{
 @Input() stdtable !: Array<Istd>
}