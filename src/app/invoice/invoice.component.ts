import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { Invoice } from './invoice';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  products: Array<Product>;


  invoice: Invoice = {
    'products': null,
    'total': 0,
  };
  constructor(private _invoiceService: InvoiceService) { }

  ngOnInit() {
    this.products = this._invoiceService.getProducts();
    this.setInvoice();

  }

  public setInvoice(): void {
    let total = 0;
    this.invoice.products = this.products;
    for (let product of this.products) {
      total = total + product.total;
    }
    this.invoice.total = total;
  }

}
