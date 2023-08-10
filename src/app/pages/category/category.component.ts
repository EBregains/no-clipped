import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  products: Product[] = [];
  categoryId: string | null = null; 

  page = 0;
  pageSize = 10;

  constructor (
    private route: ActivatedRoute,
    private productsService: ProductsService,
    ) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap(params =>{
        this.categoryId = params['id'];
        if (this.categoryId) {
          return this.productsService.getByCategory(this.categoryId, this.pageSize, this.page * this.pageSize);
        }
        return [];
      })
    ) 
    .subscribe({
      next: (data => {
        this.page += 1;
        this.products = data;
      }),
      error: error => console.error(error),
      complete: () => console.log('Completed')
    });  
  }

  loadMore() {
    if (this.categoryId){ 
      this.productsService.getByCategory(this.categoryId, this.pageSize, this.page * this.pageSize).subscribe({
        next: products => {
          this.products = this.products.concat(products);
          this.page += 1;
        },
        error: error => console.error(error),
        complete: () => console.log('function loadMore() on category.comp.ts completed')
      });
    }
  }
}