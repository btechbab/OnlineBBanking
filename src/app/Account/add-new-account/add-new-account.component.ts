import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccServiceService } from '../acc-service.service';

@Component({
  selector: 'app-add-new-account',
  templateUrl: './add-new-account.component.html',
  styleUrls: ['./add-new-account.component.css']
})
export class AddNewAccountComponent implements OnInit {
  addForm!: any;
  submitted: boolean = false;
  

  

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private AccSer: AccServiceService) { }

    ngOnInit() {
      this.addForm = this.formBuilder.group({
        // id:[],
        accNo:['', Validators.required],
        userId: ['', Validators.required],
        userPass: ['', Validators.required],
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
        this.AccSer.addAccount(this.addForm.value)
          .subscribe(data => {
            this.router.navigate(['/userhomepage']);
          });
 }
}