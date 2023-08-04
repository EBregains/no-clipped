import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { Product, emptyProduct } from '../../model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  shoppingCart: Product[] = [];
  products: Product[] = [];
  selectedProduct: Product = emptyProduct;

  // List Pageing sysytem
  page = 0;
  pageSize = 9;
  collectionSize = this.products.length;

  // booleans 
  openProductDetails = false; 

  loadMore() {
    this.page += 1;
    this.productsService.getFakeProductsOffset(this.pageSize, this.page * this.pageSize)
      .subscribe((products) => {
        this.products = this.products.concat(products);
      });
  }

  addToShoppingCart(product: Product) {
    this.storeService.addToCart(product);
  }

  closeProductDetails() {
    this.openProductDetails = false;
    this.selectedProduct = emptyProduct;
  }

  onQuickView(id: string) {
    this.productsService.getFakeProduct(id)
    .subscribe((product) => {
      this.selectedProduct = product;
    });
    this.openProductDetails = true;
  }



  constructor(
    private storeService: StoreService,
    private productsService: ProductsService,
  ) {
    
  }

  ngOnInit(): void {
    this.productsService.getFakeProductsOffset(this.pageSize, this.page * this.pageSize)
      .subscribe((products) => {
        console.log(products);
          this.products = products;
      });
  }
}
