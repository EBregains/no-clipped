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
    console.log('from store.service: ', this.getTotal);
  }

  get getTotal() {
    return this.shoppingCart.reduce((acc, curr) => acc + curr.price, 0);
  }

  removeProductFromCart(index: number) {
    this.shoppingCart.splice(index, 1);
    this.myCart.next(this.shoppingCart);
  }

  emptyCart() {
    this.shoppingCart = [];
    this.myCart.next(this.shoppingCart);
  }
}