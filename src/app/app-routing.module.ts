import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';

const routes: Routes = [
    { path: '', redirectTo: 'product-entry', pathMatch: 'full' },
    { path: 'product-entry', component: ProductEntryComponent },
    { path: 'invoice', component: InvoiceComponent }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }




