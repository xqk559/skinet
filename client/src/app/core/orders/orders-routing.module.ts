import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from '../orders/orders.component';
import { OrderDetailsComponent } from '../orders/order-details/order-details.component';

const routes: Routes = [
  { path: '', component: OrdersComponent, data: { breadcrumb: 'Orders' } },
  { path: ':id', component: OrderDetailsComponent, data: { breadcrumb: {alias: 'Order Details'} } }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
