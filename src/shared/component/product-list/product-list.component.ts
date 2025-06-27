import { Component, Input } from "@angular/core";
import { Iproduct } from "src/models/product.interface";

@Component({
    selector : "app-productList",
    templateUrl : "./product-list.component.html",
    styleUrls : ["./product-list.component.scss"]
})
export class ProductListComponent{
    @Input() productList !: Array<Iproduct>
}