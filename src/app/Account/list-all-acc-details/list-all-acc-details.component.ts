import { Component, OnInit } from '@angular/core';
import { AccServiceService } from '../acc-service.service';
import { Account } from '../Account';

@Component({
  selector: 'app-list-all-acc-details',
  templateUrl: './list-all-acc-details.component.html',
  styleUrls: ['./list-all-acc-details.component.css']
})
export class ListAllAccDetailsComponent implements OnInit {

  AccList: Account[]=[];

  constructor(private accServ:AccServiceService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.accServ.listAllCustomers().subscribe((data: Account[])=> {this.AccList=data; console.log("in Cust-list "+this.AccList)}
    )
  }

}
