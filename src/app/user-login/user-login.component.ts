import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm:any;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router,) { }


  onSubmit(){
    
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    if(this.loginForm.controls.userName.value =="102" &&
        this.loginForm.controls.userPass.value=="ramesh"){
          localStorage.setItem("userName",this.loginForm.controls.userName.value);
          this.router.navigate(['/userhomepage']);
    }
    else{
      this.invalidLogin = true;
    }
    
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userPass: ['', Validators.required]
    });
  }
  }