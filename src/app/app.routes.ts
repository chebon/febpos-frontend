import { Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { SalesComponent } from './sales/sales.component';

export const routes: Routes = [
  { path: 'product-form', component: ProductFormComponent },
  { path: 'product-table', component: ProductTableComponent },
  { path: 'sales', component: SalesComponent },
  { path: '', redirectTo: '/product-table', pathMatch: 'full' }, // Redirect to product table by default
];
