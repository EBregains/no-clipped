import { Component } from '@angular/core';

import { StoreService } from '../../services/store.service';

import { Route } from '../../model/route.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  openSideMenu = false;
  numProductsOnCart = 0;
  routes: Route[] = [
    {
      path: '/products',
      name: 'Products',
    },
    {
      path: '/contact-us',
      name: 'Contact',
    },
    {
      path: '/about-us',
      name: 'About Us',
    },
  ];

  constructor (
    private storeService: StoreService,
  ) {}

  OnInit() {
    this.storeService.myCart$.subscribe((cart) => {
      this.numProductsOnCart = cart.length;
    });
  }

  toggleSideMenu() {
    this.openSideMenu = !this.openSideMenu;
  }
}
