import { Component } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  shoppingCart: Product[] = [];
  products: Product[] = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      name: 'Phone Standard',
      price: 299,
      description: '',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 7,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 8,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 9,
      name: 'Phone Standard',
      price: 299,
      description: '',
      image: 'https://via.placeholder.com/150'
    }
  ];

  addToShoppingCart(product: Product) {
    this.shoppingCart.push(product);
    console.log(this.shoppingCart.length);
    console.log(this.shoppingCart.reduce((sum, item) => sum + item.price, 0));
  }
}
