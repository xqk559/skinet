import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import {IBrand} from '../shared/models/brands';
import {IType} from '../shared/models/productType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(): any {
    return this.http.get<IPagination>(this.baseUrl + 'products?pageSize=50');
  }

  getBrands(): any {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(): any {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
