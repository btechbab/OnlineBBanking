import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayeeServicesService } from '../payee-services.service';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {
  addForm!: any;
  submitted: boolean = false;
  

  

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private PayeeSer: PayeeServicesService) { }

    ngOnInit() {
      this.addForm = this.formBuilder.group({
        // id:[],
        payid:['', Validators.required],
        payname: ['', Validators.required],
        payaccno: ['', Validators.required],
        payreaccno:['', Validators.required],
        paynn: ['', Validators.required],
        accNo: ['', Validators.required],
       
      });
  
    }

    onSubmit() {
        this.submitted = true;
        if(this.addForm.invalid){
          return;
        }
        this.PayeeSer.addPayee(this.addForm.value)
          .subscribe((data: any) => {
            this.router.navigate(['/userhomepage']);
          });
 }
}