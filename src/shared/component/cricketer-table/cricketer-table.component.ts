import { Component, Input } from "@angular/core";
import { Icrick } from "src/models/cricketer.interface";

@Component({
    selector : "app-cricketer-table",
    templateUrl : "./cricketer-table.component.html",
    styleUrls : ["./cricketer-table.component.scss"]
})
export class CricketerTableComponent{
    @Input() cricketer !: Array<Icrick>
}