import { Component } from "@angular/core";
import { Imovie } from "src/models/movie";

@Component({
    selector : "app-movies-dashboard",
    templateUrl : "./movie-dashboard.component.html",
    styleUrls : ["./movie-dashboard.component.scss"]
})
export class MovieComponent{
    movieArr : Array<Imovie> = [
        {
            movieTitle : 'Chava'
        },
        {
            movieTitle : "Tanhaji"
        }
    ]

    submitForm(eve : Imovie){
        this.movieArr.push(eve)
    }
}