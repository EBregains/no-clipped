import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HeaderComponent } from '../website/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule
  ],
  exports: [
    ProductComponent,
    ProductsListComponent
  ]
})
export class SharedModule { }
