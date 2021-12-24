import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransService } from '../trans.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-transaction-by-id',
  templateUrl: './transaction-by-id.component.html',
  styleUrls: ['./transaction-by-id.component.css']
})
export class TransactionByIdComponent implements OnInit {

  transactionObj: Transaction = new Transaction();
  txId: string = "";
  notFound: boolean = false;
  accuntno:number=0;

  constructor(private TransactionService:TransService, private router: Router) { }

  ngOnInit(): void {
  }
  onSearch() {
    console.log("inside search" + this.txId);
    this.TransactionService.getTransactionById(this.txId).
      subscribe((data:any) => {
        this.transactionObj = data;
        
        if (this.transactionObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        () => {
          console.log('transaction not found');
          this.notFound = true;
        })

  }
}