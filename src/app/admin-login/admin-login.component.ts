import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm:any;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router,) { }


  onSubmit(){
    
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    if(this.loginForm.controls.adminName.value =="101" &&
        this.loginForm.controls.adminPass.value=="abc@123"){
          localStorage.setItem("adminName",this.loginForm.controls.adminName.value);
          this.router.navigate(['/AdminhomePage']);
    }
    else{
      this.invalidLogin = true;
    }
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      adminName: ['', Validators.required],
      adminPass: ['', Validators.required]
    });
  }
  }