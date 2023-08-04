import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private fakeAPIUrl = `${environment.API_URL}/api/v1/products`;
  constructor(
    private http: HttpClient,
  ) { }
  
  getFakeProducts() {
    return this.http.get<Product[]>(`${this.fakeAPIUrl}`);
  }

  getFakeProduct(id: string) {
    return this.http.get<Product>(`${this.fakeAPIUrl}/${id}`);
  }

  getFakeProductsOffset(quantity: number, offset: number) {
    return this.http.get<Product[]>(`${this.fakeAPIUrl}?limit=${quantity}&offset=${offset}`);
  }
}
