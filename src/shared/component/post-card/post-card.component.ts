import { Component, Input } from "@angular/core";
import { Ipost } from "src/models/post.interface";

@Component({
    selector : "app-postCard",
    templateUrl : "./post-card.component.html",
    styleUrls : ["./post-card.component.scss"]
})
export class PostCardComponent{
  @Input()  postcard !: Ipost;
}