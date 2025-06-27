import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Istd } from "src/models/std.interface";

@Component({
    selector : "app-stdForm",
    templateUrl : "./student-form.component.html",
    styleUrls : ["./student-form.component.scss"]

})
export class StudentFormComponent{
 @Output() stdForm : EventEmitter<Istd> = new EventEmitter<Istd>()

    @ViewChild("fName") fName !: ElementRef;
    @ViewChild("lName") lName !: ElementRef;
    @ViewChild("email") email!: ElementRef;
    @ViewChild("contact") contact !: ElementRef;
    constructor(){

    }

    onAddStd(){
        let stdObj : Istd = {
            fName : this.fName.nativeElement.value,
            lName : this.lName.nativeElement.value,
            email : this.email.nativeElement.value,
            contact : this.contact.nativeElement.value
        }
        console.log(stdObj);

        this.stdForm.emit(stdObj)

        this.fName.nativeElement.value = this.lName.nativeElement.value = this.email.nativeElement.value =
        this.contact.nativeElement.value = ""
    }
}