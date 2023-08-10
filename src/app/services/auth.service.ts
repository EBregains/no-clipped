import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { User, UserDTO } from '../model/user.model';
import { Auth } from '../model/auth.model';

import { environment } from 'src/environments/environment';
import { Observable, switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private APIUrl = `${environment.API_URL}/api/v1/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  login(email: string, password: string): Observable<Auth> {
    return this.http.post<Auth>(`${this.APIUrl}/login`, { email, password })
    .pipe(
      tap(response => this.tokenService.saveTokenLocal(response.access_token))
    );
  }

  getProfile(): Observable<User> {

    return this.http.get<User>(`${this.APIUrl}/profile`, { 
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // }
     });
  }

  loginAndGet(email:string, password:string) {
    return this.login(email, password)
    .pipe(
      switchMap(rta => this.getProfile())
    )
  }
}
