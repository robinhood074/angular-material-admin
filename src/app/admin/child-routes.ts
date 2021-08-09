export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'pending-payment',
    loadChildren: () =>
      import('./pending-payment/pending-payment.module').then(m => m.PendingPaymentModule),
    data: { icon: 'money', text: 'Pending Payment' }
  },
  {
    path: 'transaction-history',
    loadChildren: () =>
      import('./transaction-history/transaction-history.module').then(m => m.TransactionHistoryModule),
    data: { icon: 'receipt', text: 'Transaction History' }
  }
  
];
