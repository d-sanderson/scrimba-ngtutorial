import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from "../orders/orders.component";


//orders/2
const routes: Routes = [
	{ path: 'orders/:id', component: OrdersComponent },

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OrdersRoutingModule { }
