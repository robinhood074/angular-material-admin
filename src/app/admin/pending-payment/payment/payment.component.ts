import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  tabtitle1 = 1000;
  tabtitle2 = 2000;
  tabtitle3 = 3000;
  tabtitle4 = 4000;
  tabtitle5 = 5000; 

  view(){
    this.router.navigate(['/pending-payment/details'])
  }
}
