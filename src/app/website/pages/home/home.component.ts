import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: Product[] = [];
  // List Paging sysytem
  page = 0;
  pageSize = 9;
  collectionSize = this.products.length;

  // Quick view query param
  productId: string | null = null;  
  
  loadMore() {
    this.productsService.getFakeProducts(this.pageSize, this.page * this.pageSize)
      .subscribe({
        next: (products) => {
          this.products = this.products.concat(products);
          this.page += 1;
        },
        error: (err) => console.log(err),
        complete: () => console.log('function loadMore() from product-list.c.ts complete')
    });
  }

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.productsService.getFakeProducts(this.pageSize, this.page * this.pageSize)
      .subscribe(
        {
          next: (products) => this.products = products,
          error: (err) => console.log(err),
          complete: () => console.log(' function ngOnInit() from product-list.c.ts complete')
        });
    this.route.queryParamMap.subscribe(params => {
      this.productId = params.get('product');
      
    });
  }
}
