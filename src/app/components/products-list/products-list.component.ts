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

  // List Paging sysytem
  page = 0;
  pageSize = 9;
  collectionSize = this.products.length;

  // booleans 
  openProductDetails = false; 



  loadMore() {
    this.page += 1;
    this.productsService.getFakeProducts(this.pageSize, this.page * this.pageSize)
      .subscribe({
        next: (products) => this.products = this.products.concat(products),
        error: (err) => console.log(err),
        complete: () => console.log('function loadMore() from product-list.c.ts complete')
    });
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
  ) {
    
  }

  ngOnInit(): void {
    this.productsService.getFakeProducts(this.pageSize, this.page * this.pageSize)
      .subscribe(
        {
          next: (products) => this.products = products,
          error: (err) => console.log(err),
          complete: () => console.log(' function ngOnInit() from product-list.c.ts complete')
        });
  }
}
