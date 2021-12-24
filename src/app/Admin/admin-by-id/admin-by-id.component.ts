import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { AdmnService } from '../admn-service.service';

@Component({
  selector: 'app-admin-by-id',
  templateUrl: './admin-by-id.component.html',
  styleUrls: ['./admin-by-id.component.css']
})
export class AdminByIdComponent implements OnInit {
  adminObj: Admin = new Admin();
  adminId: number = 0;
  notFound: boolean = false;
  no:number=0;

  constructor(private AdminService:AdmnService, private router: Router) { }

  ngOnInit(): void {
  }
  onSearch() {
    console.log("inside search" + this.adminId);
    this.AdminService.getAdminById(this.adminId).
      subscribe((data:any) => {
        this.adminObj = data;
        
        if (this.adminObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        () => {
          console.log('admin not found');
          this.notFound = true;
        })

  }

}
