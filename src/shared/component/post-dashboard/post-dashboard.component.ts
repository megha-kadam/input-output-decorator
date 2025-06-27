import { Component } from "@angular/core";
import { posts } from "src/const/post";
// import { posts } from "src/const/post";
import { Ipost } from "src/models/post.interface";


@Component({
    selector : "app-post-dashboard",
    templateUrl : "./post-dashboard.component.html",
    styleUrls : ["./post-dashboard.component.scss"]
})
export class PostComponent{
    postsArr : Array<Ipost> = posts

    addPost(eve : Ipost){
        this.postsArr.push(eve)
    }
  }