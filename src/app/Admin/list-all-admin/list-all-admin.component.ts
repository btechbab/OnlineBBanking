import { Component, OnInit } from '@angular/core';
import { Admin } from '../Admin';
import { AdmnService } from '../admn-service.service';

@Component({
  selector: 'app-list-all-admin',
  templateUrl: './list-all-admin.component.html',
  styleUrls: ['./list-all-admin.component.css']
})
export class ListAllAdminComponent implements OnInit {
  adminList: Admin[]=[];

  constructor(private adminSer:AdmnService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.adminSer.listAllAdmin().subscribe((data: Admin[])=> {this.adminList=data; 
    console.log("in emp-list " + this.adminList)}
    )
  }


}