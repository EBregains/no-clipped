import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'no-clipped';

  session_token = '';

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  createUser() {
    this.usersService.create({
      name: 'Jhon Doe',
      email: 'jhondoe@gmail.com',
      password: '12345',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    }).subscribe({
      next: (user) => console.log(user),
      error: (err) => console.log(err),
      complete: () => console.log('function createUser() from app.c.ts complete')
    });
  }
}
