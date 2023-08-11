import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Category } from '../model/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private API_URL = `${environment.API_URL}/api/v1/categories`
  constructor(
    private http: HttpClient,
  ) { }

  getCategories(quantity?: number | string, offset?: number | string) : Observable<Category[]> {
    let params = new HttpParams();
    if (quantity && offset !== undefined) {
      params = params.set('limit', quantity);
      params = params.set('offset', offset);
    }
    return this.http.get<Category[]>(this.API_URL, { params: params });
  }

  getCategory(id: string) : Observable<Category> {
    return this.http.get<Category>(`${this.API_URL}/${id}`);
  }
}
