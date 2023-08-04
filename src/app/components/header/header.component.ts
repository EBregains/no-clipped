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
      path: '/productos',
      name: 'Productos',
    },
    {
      path: '/contacto',
      name: 'Contacto',
    },
    {
      path: '/acerca',
      name: 'Conocenos',
    },
  ];

  constructor (
    private storeService: StoreService,
  ) {}

  ngOnInit() {
    this.storeService.myCart$.subscribe((cart) => {
      this.numProductsOnCart = cart.length;
    });
  }

  toggleSideMenu() {
    this.openSideMenu = !this.openSideMenu;
  }
}
