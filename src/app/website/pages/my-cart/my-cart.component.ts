import { Component, OnInit} from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  productsOnCart$: Product[] = [];
  total = 0;

  constructor (
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((cart) => {
      this.productsOnCart$ = cart;
      this.total = this.storeService.getTotal;
    });
  }

  removeProductFromCart(index: number) {
    this.storeService.removeProductFromCart(index);
  }

  emptyCart() {
    this.storeService.emptyCart();
  }

  checkout() {
    alert('Gracias por su compra');
  }
}
