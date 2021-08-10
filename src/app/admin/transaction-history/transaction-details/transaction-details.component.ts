import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


/** Constants used to fill up our data base. */

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent  {
  
  data: Array<any>;constructor(){
    this.data = [
        { 
          id: '01',
          username: 'Yagnik', 
          planamount: '2000',
          rewardamount: '1500',
          date: '13/2/2021'
        },
        { 
          id: '02',
          username: 'satani', 
          planamount: '3000',
          rewardamount: '1500',
          date: '27/6/2021'
        },
        { 
          id: '03',
          username: 'satani', 
          planamount: '1000',
          rewardamount: '1500',
          date: '6/3/2021'
        }            
    ];
}

  
}
