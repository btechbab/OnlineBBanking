import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccServiceService } from '../acc-service.service';
import { Account } from '../Account';

@Component({
  selector: 'app-acc-by-id',
  templateUrl: './acc-by-id.component.html',
  styleUrls: ['./acc-by-id.component.css']
})
export class AccByIdComponent implements OnInit {
  empObj: Account = new Account();
  AccNo:number=0;
  notFound: boolean = false;
  no: number | undefined;
  constructor( private AccServ: AccServiceService, private router: Router ) { }

  ngOnInit(): void {

  }

  onSearch() {
    console.log("inside search" + this.AccNo);
    this.AccServ.getAccByAccNo(this.AccNo).
      subscribe(data => {
        this.empObj = data;
        
        if (this.empObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        (error) => {
          console.log('account details not found');
          this.notFound = true;
        })


  }

}