import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Product } from '../model/product.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private fakeAPIUrl = `${environment.API_URL}/api/v1/products`;
  constructor(
    private http: HttpClient,
  ) { }
  
  getFakeProducts() {
    return this.http.get<Product[]>(`${this.fakeAPIUrl}`);
  }

  getFakeProduct(id: string) {
    return this.http.get<Product>(`${this.fakeAPIUrl}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleErrors(error);
      })
    );
  }

  getFakeProductsOffset(quantity: number, offset: number) {
    return this.http.get<Product[]>(`${this.fakeAPIUrl}?limit=${quantity}&offset=${offset}`);
  }

// ERROR HANDLER

  private handleErrors(error: HttpErrorResponse): Observable<never> {
    switch (error.status) {
      case HttpStatusCode.Forbidden:
        return throwError(() => new Error('You do not have permission to access this resource.'));
      case HttpStatusCode.NotFound:
        return throwError(() => new Error(`Not found: ${error.url}`));
      case HttpStatusCode.InternalServerError:
        return throwError(() => new Error('Internal Server Error. Please try again later.'));
      default:
        return throwError(() => new Error('Something went wrong.'));
    }
  }
}
