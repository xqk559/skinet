import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IDeliveryMethod } from '../shared/models/deliverymethod';
import { map } from 'rxjs/operators';
import { IOrderToCreate } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})

export class CheckoutService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createOrder(order: IOrderToCreate): any {
    return this.http.post(this.baseUrl + 'orders', order);
  }

  getDeliveryMethods(): any {
    return this.http.get(this.baseUrl + 'orders/deliveryMethods').pipe(
      map((dm: IDeliveryMethod[]) => {
        return dm.sort((a, b) => b.price - a.price);
      })
    );
  }
}
