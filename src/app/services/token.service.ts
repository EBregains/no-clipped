import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveTokenLocal(token: string) {
    localStorage.setItem('token', token);
  }

  getTokenLocal(): string {
    return localStorage.getItem('token') || '';
  }

  removeTokenLocal(): void {
    localStorage.removeItem('token');
  };

}
