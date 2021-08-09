import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  tabtitle1 = 1000;
  tabtitle2 = 2000;
  tabtitle3 = 3000;
  tabtitle4 = 4000;
  tabtitle5 = 5000; 

  details(){
    this.router.navigate(['/transaction-history/details'])
  }

}
