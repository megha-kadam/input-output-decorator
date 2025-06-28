import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ibook } from "src/models/books,interface";


@Component({
    selector : "app-booksForm",
    templateUrl : "./books-form.component.html",
    styleUrls : ["./books-form.component.scss"]
})
export class BooksFormComponent{
    @Output() bookForm : EventEmitter<Ibook> = new EventEmitter<Ibook>();

    @ViewChild("bookTitle") bookTitle !: ElementRef;
    @ViewChild("author") author !: ElementRef;
    @ViewChild("genre") genre !: ElementRef;
    @ViewChild("year") year !: ElementRef;
    constructor(){}

    onAddBook(){
           if( this.bookTitle.nativeElement.value = this.author.nativeElement.value = 
        this.genre.nativeElement.value = this.year.nativeElement.value){
             let bookObj : Ibook = {
                booktitle : this.bookTitle.nativeElement.value,
                author : this.author.nativeElement.value,
                genre : this.genre.nativeElement.value,
                year : this.year.nativeElement.value
            }
             console.log(bookObj);
            this.bookForm.emit(bookObj);
           }

        this.bookTitle.nativeElement.value = this.author.nativeElement.value = 
        this.genre.nativeElement.value = this.year.nativeElement.value = '';
    }
}