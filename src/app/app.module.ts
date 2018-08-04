import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { AppRoutingModule } from './app-routing.module';
import { InvoiceService } from './invoice/invoice.service';
import { ProductEntryService } from './product-entry/product-entry.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    ProductEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [InvoiceService, ProductEntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
