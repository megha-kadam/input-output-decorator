import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Iproduct } from "src/models/product.interface";


@Component({
    selector : "app-productform",
    templateUrl : "./product-form.component.html",
    styleUrls : ["./product-form.component.scss"]
})
export class ProductFormComponent{
    @Output() product : EventEmitter<Iproduct> = new EventEmitter<Iproduct>() 

    @ViewChild("pName") pName !: ElementRef;
    constructor(){}

    onAddProduct(){
        let obj : Iproduct = {
            pName : this.pName.nativeElement.value
        }
        console.log(obj);

        this.product.emit(obj);

        this.pName.nativeElement.value = "";
    }
}