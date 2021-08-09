import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionHistoryRoutingModule } from './transaction-history-routing.module';
import { TransactionHistoryComponent } from './transaction-history.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { NbButtonModule, NbCardModule, NbRouteTabsetModule, NbTabsetModule } from '@nebular/theme';


@NgModule({
  declarations: [
    TransactionHistoryComponent,
    TransactionComponent,
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule,
    TransactionHistoryRoutingModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class TransactionHistoryModule { }
