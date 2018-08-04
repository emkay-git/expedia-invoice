import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';
import { InvoiceService } from '../invoice/invoice.service';
import { ProductEntryService } from './product-entry.service';
@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {
  allProductsFromDb: Array<Product> = [];
  products: Array<Product> = [];
  totalProductsCount = 0;
  product: Product = {
    'id': 0,
    'name': '',
    'quantity': 0,
    'category': '',
    'price': 0,
    'taxRate': 0,
    'total': 0
  };

  constructor(private route: Router, private _invoiceService: InvoiceService, private _productEntryService: ProductEntryService) { }

  ngOnInit() {
    this._productEntryService.getAllProductsFromDb().subscribe((data: Array<Product>) => {
      this.allProductsFromDb = data;
    });
  }



  submit() {
    this.addAnother();
    this.route.navigate(['invoice']);
    this._invoiceService.setProducts(this.products);
  }

  categoryType(type: string) {
    if (type == 'medical') {
      this.product.category = 'medical';
      this.product.taxRate = 0;
    }
    else {
      this.product.taxRate = 20;
      this.product.category = 'non-medical';
    }
  }

  addAnother() {

    this.product.id = this.totalProductsCount;

    let total = this.product.price * this.product.quantity;
    this.product.total = total + total * this.product.taxRate / 100;
    this.products.push(this.product);
    this.totalProductsCount = this.products.length;
    this.cleanProductJson();
  }

  cleanProductJson(): void {
    this.product = {
      'id': 0,
      'name': '',
      'quantity': 0,
      'category': '',
      'price': 0,
      'taxRate': 0,
      'total': 0
    };
  }

}
