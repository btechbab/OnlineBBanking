import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payee } from '../Payee';
import { PayeeServicesService } from '../payee-services.service';

@Component({
  selector: 'app-list-payee-details-byid',
  templateUrl: './list-payee-details-byid.component.html',
  styleUrls: ['./list-payee-details-byid.component.css']
})
export class ListPayeeDetailsByidComponent implements OnInit {

  payeObj: Payee = new Payee();
  payId: number = 0;
  notFound: boolean = false;
 // no:number=0;
  //PayeServicesService: any;

  constructor(private paySer:PayeeServicesService,private router:Router){}

  ngOnInit(): void {
  }

  onSearch() {
    console.log("inside search" + this. payId);
    this.paySer.fetchPayeeDetailsById(this. payId).
    subscribe((data: any) => {
      this.payeObj = data;
        
      
        if (this.payeObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        (error: any) => {
          console.log('payee not found');
          this.notFound = true;
        })
  }
}
