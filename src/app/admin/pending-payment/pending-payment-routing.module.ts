import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentComponent } from './payment/payment.component';
import { PendingPaymentComponent } from './pending-payment.component';

const routes: Routes = [
  {
    path:'',
    component:PaymentComponent
  },
  {
    path:'details',
    component:PaymentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingPaymentRoutingModule { }
