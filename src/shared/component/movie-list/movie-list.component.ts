import { Component, Input } from "@angular/core";
import { Imovie } from "src/models/movie";

@Component({
    selector : "app-movieList",
    templateUrl : "./movie-list.component.html",
    styleUrls : ["./movie-list.component.scss"]
})
export class MovieListComponent{
@Input() movieList !: Array<Imovie>
}