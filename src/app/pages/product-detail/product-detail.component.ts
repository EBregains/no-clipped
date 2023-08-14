import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  private productId: string | null = null;
  product: Product | null = {} as Product; 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.productId = params.get('id');
          if (this.productId) {
            return this.productService.getFakeProduct(this.productId)
          };
          return [null];
        })
      ).subscribe((data) => {
        (this.product = data)
      })
  }
}
