import { Component } from '@angular/core';

import { StoreService } from '../../../services/store.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { Route } from '../../../model/route.model';
import { User } from 'src/app/model/user.model';
import { Category } from 'src/app/model/category.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { UsersService } from 'src/app/services/users.service';

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
  
  categories: Category[] = [];
  profile: User | null = null;


  constructor (
    private storeService: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private router: Router,
    ) {}
    
  ngOnInit() {
    this.storeService.myCart$.subscribe((cart) => {
      this.numProductsOnCart = cart.length;
    });
    this.getAllCategories();
    this.authService.user.subscribe( data =>
      this.profile = data
    )
  }
  
  toggleSideMenu() {
    this.openSideMenu = !this.openSideMenu;
  }
  
  login() {
    this.authService.loginAndGet("admin@mail.com", 'admin123')
    .subscribe({
      next: (profile) => { 
        this.profile = profile,
        this.router.navigate(['/profile']) 
      },
      error: (err) => console.log(err),
      complete: () => console.log('function loginAndGetProfile() from app.c.ts complete')
    });
  }
  
  logout() {
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['/login']);
  }
    
  getAllCategories() {
    this.categoriesService.getCategories()
    .subscribe({
      next: (categories) => { this.categories = categories },
      error: (err) => console.log(err),
      complete: () => console.log('function getAllCategories() from app.c.ts complete')
    });
  }
}
