import { Injectable } from "@angular/core";
import { Product } from "../product";
import { HttpClient } from "@angular/common/http";
import { Invoice } from "./invoice";
import { Observable } from "rxjs";

@Injectable()
export class InvoiceService {
    products: Array<Product> = [];
    postInvoiceUrl = 'http://localhost:8080/api/addInvoice';
    getInvoiceUrl = 'http://localhost:8080/api/getInvoices';
    constructor(private http: HttpClient) { }

    public setProducts(products: Array<Product>) {
        this.products = products;
    }

    public getProducts(): Array<Product> {
        return this.products;
    }

    public postInvoice(invoice: Invoice) {
        this.http.post<Invoice>(this.postInvoiceUrl, invoice);
    }

    public getAllInvoices(): Observable<any> {
        return this.http.get(this.getInvoiceUrl);
    }
}
