import { Component, OnInit } from '@angular/core';
import { Payee } from '../Payee';
import { PayeeServicesService } from '../payee-services.service';

@Component({
  selector: 'app-list-all-payee',
  templateUrl: './list-all-payee.component.html',
  styleUrls: ['./list-all-payee.component.css']
})
export class ListAllPayeeComponent implements OnInit {

  payeeList: Payee[]=[];

  constructor(private payeSer:PayeeServicesService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.payeSer.fetchPayeeDetails().subscribe((data: Payee[])=> {
      this.payeeList=data;
       console.log("in Payee-list "+this.payeeList)}
    )
  }
  
}
