import { Component } from '@angular/core';

import { StoreService } from '../../services/store.service';
import { AuthService } from '../../services/auth.service';

import { Route } from '../../model/route.model';
import { User } from 'src/app/model/user.model';

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
      path: '/men',
      name: 'HOMBRE',
    },
    {
      path: '/boys',
      name: 'NIÑO',
    },
    {
      path: '/about',
      name: 'CONOCENOS',
    },
  ];

  profile: User | null = null;


  constructor (
    private storeService: StoreService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.storeService.myCart$.subscribe((cart) => {
      this.numProductsOnCart = cart.length;
    });
  }

  toggleSideMenu() {
    this.openSideMenu = !this.openSideMenu;
  }

  login() {
    this.authService.loginAndGet("maria@mail.com", '12345')
    .subscribe({
      next: (profile) => { this.profile = profile },
      error: (err) => console.log(err),
      complete: () => console.log('function loginAndGetProfile() from app.c.ts complete')
    });
  }
}
