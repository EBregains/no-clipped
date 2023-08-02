import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private shoppingCart: Product[] = [];

  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  addToCart(product: Product) {
    this.shoppingCart.push(product);
    this.myCart.next(this.shoppingCart);
  }

  get getTotal() {
    return this.shoppingCart.reduce((acc, curr) => acc + curr.price, 0);
  }
}
