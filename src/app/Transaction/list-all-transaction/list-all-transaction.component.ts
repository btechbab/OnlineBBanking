import { Component, OnInit } from '@angular/core';
import { TransService } from '../trans.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-list-all-transaction',
  templateUrl: './list-all-transaction.component.html',
  styleUrls: ['./list-all-transaction.component.css']
})
export class ListAllTransactionComponent implements OnInit {

  txList:Transaction[]=[];
 

  constructor(private tranSer:TransService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.tranSer.listAllTransaction().subscribe((data: Transaction[]) =>{
      this.txList=data;
    console.log("in tx-list"+this.txList)

    }
    )
  }
}