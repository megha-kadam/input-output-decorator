import { Component } from "@angular/core";
import { cricketer } from "src/const/cricketer";
import { Icrick } from "src/models/cricketer.interface";

@Component({
    selector : "app-cricketer-dashboard",
    templateUrl : "./cricketer-dashboard.component.html",
    styleUrls : ["./cricketer-dashboard.component.scss"]
})
export class CricketerComponent{
    cricketerArr : Array<Icrick> = cricketer;

    cricketerAdd(eve : Icrick){
        this.cricketerArr.push(eve)
    }
}