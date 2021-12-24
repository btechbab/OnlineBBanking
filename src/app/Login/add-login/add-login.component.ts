// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LoginServiceService } from '../login-service.service';

// @Component({
//   selector: 'app-add-login',
//   templateUrl: './add-login.component.html',
//   styleUrls: ['./add-login.component.css']
// })
// export class AddLoginComponent implements OnInit {
//   addForm!: any;
//   submitted: boolean = false;
  

  

//   constructor(private formBuilder: FormBuilder, private router: Router, 
//     private loginSer: LoginServiceService) { }

//     ngOnInit() {
//       this.addForm = this.formBuilder.group({
//         // id:[],
       
//         userId: ['', Validators.required],
//         userpass: ['', Validators.required],
        
       
//       });
  
//     }

//     onSubmit() {
//         this.submitted = true;
//         if(this.addForm.invalid){
//           return;
//         }
//         this.loginSer.addLogin(this.addForm.value)
//           .subscribe((data: any) => {
//             this.router.navigate(['/login']);
//           });
//  }
// }