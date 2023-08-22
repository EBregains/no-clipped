import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User, UserDTO } from '../model/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private APIUrl = `${environment.API_URL}/api/v1/users/`;

  constructor(
    private http: HttpClient,
  ) { }

  create(dto: UserDTO): Observable<User> {
    return this.http.post<User>(this.APIUrl, dto);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.APIUrl);
  }
}
