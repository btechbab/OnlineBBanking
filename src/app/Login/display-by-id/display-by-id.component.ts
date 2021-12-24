import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Login';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-display-by-id',
  templateUrl: './display-by-id.component.html',
  styleUrls: ['./display-by-id.component.css']
})
export class DisplayByIdComponent implements OnInit {

  // loginObj: Login=new Login();
  loginId: number=0;

  
  notFound: boolean=false;
  no:number=0;
   loginObj: Login=new Login();
 


  constructor(private LoginService:LoginServiceService,private router:Router) { }

 
        ngOnInit(): void {

        }
      
        onSearch() {
          console.log("inside search" + this.loginId);
          this.LoginService.displayloginbyid(this.loginId).
            subscribe((data: any) => {
              this.loginObj = data;
              
              if (this.loginObj) {
                this.notFound = true;
              }
              {
                this.notFound = false;
              }
      
            },
              (error: any) => {
                console.log('login details not found');
                this.notFound = true;
              })
  }

}
