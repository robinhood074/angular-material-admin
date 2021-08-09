import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingPaymentRoutingModule } from './pending-payment-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PendingPaymentComponent } from './pending-payment.component';
import { NbButtonModule, NbCardModule, NbRouteTabsetModule, NbTabsetModule } from '@nebular/theme';


@NgModule({
  declarations: [
    PaymentComponent,
    PaymentDetailsComponent,
    PendingPaymentComponent
  ],
  imports: [
    CommonModule,
    PendingPaymentRoutingModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class PendingPaymentModule { }
