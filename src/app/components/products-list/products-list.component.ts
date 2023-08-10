import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { Product, emptyProduct } from '../../model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  @Input() products: Product[] = [];
  
  @Output() onLoadMore: EventEmitter<string> = new EventEmitter<string>();

  shoppingCart: Product[] = [];
  selectedProduct: Product = emptyProduct;
  
  // booleans 
  openProductDetails = false; 

  loadMore(): void {
    this.onLoadMore.emit();
  }
  
  addToShoppingCart(product: Product) {
    this.storeService.addToCart(product);
  }

  toggleProductDetails() {
    this.openProductDetails = !this.openProductDetails;
  }

  onQuickView(id: string) {
    this.productsService.getFakeProduct(id)
    .subscribe({
      next: (product) => {
        this.selectedProduct = product;
        this.toggleProductDetails();
      }
    });
  }

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService,
  ) { }
}
