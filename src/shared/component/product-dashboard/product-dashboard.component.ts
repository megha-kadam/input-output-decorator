import { Component } from "@angular/core";
import { Iproduct } from "src/models/product.interface";

@Component({
    selector : "app-productdashboard",
    templateUrl : "./product-dashboard.component.html",
    styleUrls : ["./product-dashboard.component.scss"]
})
export class ProductComponent{
    productArr : Array<Iproduct> = [
        {
            pName : "Samsung"
        }, 
        {
            pName : "Iphone"
        }
    ]

    addProduct(eve : Iproduct){
        this.productArr.push(eve)
    }
}