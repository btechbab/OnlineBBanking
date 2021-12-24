import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addForm!: any;
  submitted: boolean = false;
  

  

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private RegSer: RegisterService) { }

    ngOnInit() {
      this.addForm = this.formBuilder.group({
        // id:[],
        accNo:['', Validators.required],
        userId: ['', Validators.required],
        userPassword: ['', Validators.required],
        title:['', Validators.required],
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName:['', Validators.required],
        fatherName:['', Validators.required],
        mobileNum: ['', Validators.required],
        emailID: ['', Validators.required],
        aadharNum:['', Validators.required],
        dob:['', Validators.required],
        occType:['', Validators.required],
        sourceOfIncome:['', Validators.required],
        grossAnnualIncome: ['', Validators.required],
        debitCard: ['', Validators.required],
        netBanking: ['', Validators.required],
        balance:['', Validators.required],
        state: ['', Validators.required],
        landmark: ['', Validators.required],
        city:['', Validators.required],
        pincode: ['', Validators.required],
       
      });
  
    }

    onSubmit() {
        this.submitted = true;
        if(this.addForm.invalid){
          return;
        }
        this.RegSer.addAccount(this.addForm.value)
          .subscribe((data: any) => {
            this.router.navigate(['/userhomepage']);
          });
 }
}
