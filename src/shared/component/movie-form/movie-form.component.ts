import { Element } from "@angular/compiler";
import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Imovie } from "src/models/movie";


@Component({
    selector : "app-movieForm",
    templateUrl : "./movie-form.component.html",
    styleUrls : ["./movie-form.component.scss"]
})
export class MovieFormComponent{
    @Output() movieForm : EventEmitter<Imovie> = new EventEmitter<Imovie>()

    @ViewChild('movieTitle') movieTitle !: ElementRef
    constructor(){}

    onAddMovie(){
        if(this.movieTitle.nativeElement.value){
            let movieObj : Imovie = {
                movieTitle : this.movieTitle.nativeElement.value
            }
            console.log(movieObj);

            this.movieForm.emit(movieObj)            
        }

        this.movieTitle.nativeElement.value = ''
    }
}