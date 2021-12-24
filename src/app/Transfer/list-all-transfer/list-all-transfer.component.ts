import { Component, OnInit } from '@angular/core';
import { Transfer } from '../Transfer';
import { TransferServiceService } from '../transfer-service.service';

@Component({
  selector: 'app-list-all-transfer',
  templateUrl: './list-all-transfer.component.html',
  styleUrls: ['./list-all-transfer.component.css']
})
export class ListAllTransferComponent implements OnInit {

  
  transferList: Transfer[]=[];
  
    constructor(private transService:TransferServiceService) { }
  
    ngOnInit(): void {
      this.loadData();
    }
    loadData()
    {
      this.transService.listAllTransfer().subscribe((data: Transfer[])=> {this.transferList=data; 
      console.log("in emp-list " + this.transferList)}
      )
    }
  


}
