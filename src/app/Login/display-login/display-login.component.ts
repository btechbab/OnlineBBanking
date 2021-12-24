import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-display-login',
  templateUrl: './display-login.component.html',
  styleUrls: ['./display-login.component.css']
})
export class DisplayLoginComponent implements OnInit {
  loginList: Login[]=[];

  constructor(private loginSer:LoginServiceService) { }

  ngOnInit(): void {
    this.loadData();
  }
loadData()
{
  this.loginSer.displaylogin().subscribe((data: Login[])=>{this.loginList=data; console.log("in Login-list "+this.loginList)}
  )
}
}
