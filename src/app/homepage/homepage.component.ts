import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Login/login-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  rid:any;
  userid:any;
  loggedin=false;
  
  constructor(private router:Router,private service:LoginServiceService) { }

  ngOnInit(): void {

    console.log(sessionStorage.length);
    console.log("Inside home page init");
    console.log(sessionStorage.getItem('userid'));
    
    if(sessionStorage.getItem('userid') != null)
    {
      this.loggedin = true;
    }
  }
 
  registerUser()
  {
    this.router.navigate(['register']);
  }
  Account()
  {
    this.router.navigate(['Account']);
  }
  Login()
  {
    this.router.navigateByUrl('/login');
    this.service.logoutButton();

  }
  public Admin()
  {
    console.log("inside Admin");
    this.router.navigateByUrl('/admindetails');
  
  }

  public addAccount()
  {
    console.log("inside Account");
    this.router.navigateByUrl('/addAccount');
  }

  AboutUs()
  {
    console.log("Welcome to OnlineBanking ");
  }

  logout()
  {
    this.service.logoutButton();
  }
}


