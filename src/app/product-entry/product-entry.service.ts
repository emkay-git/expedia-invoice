import { Injectable } from "@angular/core";
import { Product } from "../product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductEntryService {
    products: Array<Product> = [];
    allProductsFromDb: Array<Product> = [];
    urlGetProducts = 'http://localhost:8080/api/getAllProducts';
    constructor(private http: HttpClient) { }

    public getAllProductsFromDb() {
        return this.http.get(this.urlGetProducts);
    }

}
