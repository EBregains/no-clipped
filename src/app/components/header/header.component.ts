import { Component } from '@angular/core';

import { Route } from '../../model/route.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  openSideMenu: boolean = false;
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
  ]

  toggleSideMenu() {
    this.openSideMenu = !this.openSideMenu;
  }
}
