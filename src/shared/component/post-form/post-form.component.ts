import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ipost } from "src/models/post.interface";

@Component({
    selector : "app-postForm",
    templateUrl : "./post-form.component.html",
    styleUrls : ["post-form.component.scss"]
})
export class PostFormComponent{
    @Output() onEmitPost : EventEmitter<Ipost> = new EventEmitter<Ipost>()

    @ViewChild("title") title !: ElementRef;
    @ViewChild("content") content !: ElementRef
    @ViewChild("userId") userId !: ElementRef;
    constructor(){

    }

    onPostAdd(){
        let postObj : Ipost  = {
            title : this.title.nativeElement.value,
            body : this.content.nativeElement.value,
            userId : this.userId.nativeElement.value,
            id : null
        }
        console.log(postObj);

        this.onEmitPost.emit(postObj)

        this.title.nativeElement.value = this.content.nativeElement.value = 
        this.userId.nativeElement.value = ""
    }
}