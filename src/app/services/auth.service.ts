import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { User, UserDTO } from '../model/user.model';
import { Auth } from '../model/auth.model';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private APIUrl = `${environment.API_URL}/api/v1/auth`;
  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string): Observable<Auth> {
    return this.http.post<Auth>(`${this.APIUrl}/login`, { email, password });
  }

  profile(token: string): Observable<User> {
    return this.http.get<User>(`${this.APIUrl}/profile`, { 
      headers: {
        Authorization: `Bearer ${token}`,
      }
     });
  }
}
