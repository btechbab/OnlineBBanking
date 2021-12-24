// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { TransService } from '../trans.service';
// import { Transaction } from '../Transaction';

// @Component({
//   selector: 'app-add-transation',
//   templateUrl: './add-transation.component.html',
//   styleUrls: ['./add-transation.component.css']
// })
// export class AddTransationComponent implements OnInit {
//   addForm!: any;
//   submitted: boolean = false;
  
//   txId: any;
//   p1: Transaction = 
//   {
//     txId: "", txDetails: "", txType:"",txAmount: 0,txbal: 0,
//             accNo: { accNo: 0, userId: '', userPassword: '',title:'',  firstName:'',middleName:'',lastName:'',fatherName:'',
//             mobileNum:0,emailID:'',aadharNum:0,dob:'',occType:'',sourceOfIncome:'',grossAnnualIncome:0,debitCard:0,netBanking:0,
//             balance:0,state:'',landmark:'',city:'',
//             pincode:0}
//    };
//   accNo: string | null;
 

  

//   constructor(private formBuilder: FormBuilder, private router: Router, 
//     private tranSer: TransService) { 
//     this.accNo = sessionStorage.getItem("accNo");
//     console.log("accNo :" + sessionStorage.getItem("accNo"));
    
//   }

//     ngOnInit() {
//       this.addForm = this.formBuilder.group({
//         // id:[],
//         txId:['', Validators.required],
//         txDetails: ['', Validators.required],
//         txType: ['', Validators.required],
//         txAmount:['', Validators.required],
//         txbal: ['', Validators.required],
//         accNo: ['', Validators.required]
        
       
//       });
  
//     }

//     onSubmit() {

//       this.p1.txId = this.addForm.controls['txId'].value;
//     this.p1.txDetails = this.addForm.controls['txDetails'].value;
//     this.p1.txType = this.addForm.controls['txType'].value;
//     this.p1.txAmount = this.addForm.controls['txAmount'].value;
//     this.p1.txbal = this.addForm.controls['txbal'].value;
//     this.p1.emp.empNo = this.empNo;
//         this.submitted = true;
//         if(this.addForm.invalid){
//           return;
//         }
//         this.tranSer.addTransaction(this.addForm.value)
//           .subscribe((data: any) => {
//             this.router.navigate(['/Transaction']);
//           });
//  }
// }