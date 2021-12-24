import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferServiceService } from '../transfer-service.service';

@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.css']
})
export class AddTransferComponent implements OnInit {

  addForm!: any;
  submitted: boolean = false;
  

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private transferService: TransferServiceService) { }

    ngOnInit() {
      this.addForm = this.formBuilder.group({
        // id:[],
        fromAccount:['', Validators.required],
        toAccount: ['', Validators.required],
        amount: ['', Validators.required],
        transactionDate:['', Validators.required],
        remarks: ['', Validators.required]
      });
  
    }

    onSubmit() {
        this.submitted = true;
        if(this.addForm.invalid){
          return;
        }
        this.transferService.addTransfer(this.addForm.value)
          .subscribe((data: any) => {
            this.router.navigate(['/transfersucessful']);
          });

}

}
