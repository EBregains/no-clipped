import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: 0,
    name: 'default',
    price: 0,
    image: 'default',
    description: 'default'
  };

  @Output() addedProduct = new EventEmitter<Product>();
  
  addToCart() {
    this.addedProduct.emit(this.product);
  }
}
