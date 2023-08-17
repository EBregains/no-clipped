import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Product } from '../model/product.model';

import { environment } from '../../environments/environment';

import { checkTime } from '../interceptors/time.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private fakeAPIUrl = `${environment.API_URL}/api/v1`;
  constructor(
    private http: HttpClient,
  ) { }
  
  getFakeProducts(quantity?: number, offset?: number) {
    let params = new HttpParams();
    if (quantity && offset !== undefined) {
      params = params.set('limit', quantity);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(`${this.fakeAPIUrl}/products`, { params: params, context: checkTime() });
  }

  getFakeProduct(id: string) : Observable<Product> {
    return this.http.get<Product>(`${this.fakeAPIUrl}/products/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleErrors(error);
      })
    );
  }

  getByCategory(categoryId: string, quantity?: number, offset?: number) : Observable<Product[]>{
    let params = new HttpParams();
    if (quantity !== undefined && offset !== undefined) {
      params = params.set('limit', quantity);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(`${this.fakeAPIUrl}/categories/${categoryId}/products`, { params: params, context: checkTime() });
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
        return throwError(() => new Error(`Something went wrong. ${error.message}}`));
    }
  }
}
