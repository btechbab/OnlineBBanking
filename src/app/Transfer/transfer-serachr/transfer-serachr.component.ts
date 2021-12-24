import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transfer } from '../Transfer';
import { TransferServiceService } from '../transfer-service.service';

@Component({
  selector: 'app-transfer-serachr',
  templateUrl: './transfer-serachr.component.html',
  styleUrls: ['./transfer-serachr.component.css']
})
export class TransferSerachrComponent implements OnInit {
  tranObj: Transfer = new Transfer();
  fromAccount: number = 0;
  notFound: boolean = false;
  no:number=0;
  constructor(private transferService:TransferServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  onSearch() {
    console.log("inside search" + this.fromAccount);
    this.transferService.fetchTransferByAcc(this.fromAccount).
      subscribe((data:any) => {
        this.tranObj = data;
        
        if (this.tranObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        () => {
          console.log('payee not found');
          this.notFound = true;
        })

}
}