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
      name: 'Hombres',
    },
    {
      path: '/boys',
      name: 'Niños',
    },
    {
      path: '/acerca',
      name: 'Conocenos',
    },
  ];

  token: string = '';
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
    this.authService.login('jhondoe@gmail.com', '12345')
    .subscribe({
      next: (auth) => {
        this.token = auth.access_token
        console.log(this.token);
        console.log(auth.refresh_token);
        
      },
      error: (err) => console.log(err),
      complete: () => console.log('function login() from app.c.ts complete')
    });
  }

  getProfile() {
    this.authService.profile(this.token)
    .subscribe({
      next: (user) => console.log(user),
      error: (err) => console.log(err),
      complete: () => console.log('function getProfile() from app.c.ts complete')
    });    
  }
}
