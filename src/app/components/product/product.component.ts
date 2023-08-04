import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product, emptyProduct } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = emptyProduct;

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() viewDetails = new EventEmitter<string>();
  
  viewQuickDetails() {
    this.viewDetails.emit(this.product.id);
  }

  addToCart() {
    this.addedProduct.emit(this.product);
  }
}
