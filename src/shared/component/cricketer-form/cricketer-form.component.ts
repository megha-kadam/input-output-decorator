import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Icrick } from "src/models/cricketer.interface";

@Component({
    selector : "app-cricketer-form",
    templateUrl : "./cricketer-form.component.html",
    styleUrls : ["./cricketer-form.component.scss"]
})
export class CricketerFormComponent{
@Output() crick : EventEmitter<Icrick> = new EventEmitter<Icrick>()

    @ViewChild("name") name !: ElementRef;
    @ViewChild("age") age !: ElementRef;
    @ViewChild("team") team !: ElementRef;
    @ViewChild("role") role !: ElementRef;
    @ViewChild("matches") matches !: ElementRef;
  constructor(){}

  onAddCrick(){
   if(this.name.nativeElement.value = this.age.nativeElement.value = this.team.nativeElement.value = 
    this.role.nativeElement.value = this.matches.nativeElement.value){
     let crickObj : Icrick = {
        name : this.name.nativeElement.value,
        age : this.age.nativeElement.value,
        team : this.team.nativeElement.value,
        role : this.role.nativeElement.value,
        matchesPlayed : this.matches.nativeElement.value
    }
    console.log(crickObj);

    this.crick.emit(crickObj)
   }

    this.name.nativeElement.value = this.age.nativeElement.value = this.team.nativeElement.value = 
    this.role.nativeElement.value = this.matches.nativeElement.value = ""

  }
}