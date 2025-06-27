import { Component } from "@angular/core";
import { Istd } from "src/models/std.interface";


@Component({
    selector : "app-stdDashboard",
    templateUrl : "./student-dashboard.component.html",
    styleUrls : ["./student-dashboard.component.scss"]
})
export class StudentComponent{
    stdArr : Array<Istd> = [
        {
            fName : "Jhon",
            lName : "Doe",
            email : "jd@gmail.com",
            contact : 1223
        },
        {
            fName : "June",
            lName : "Doe",
            email : "jd@gmail.com",
            contact : 777686
        }
    ]


    onstsAdd(eve : Istd){
        this.stdArr.push(eve)
    }
}