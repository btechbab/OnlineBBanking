/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmnService } from '../admn-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  addForm!: FormGroup;
  submitted: boolean = false;

  nosList: number[] = [];
  AdmnId: number | undefined;
  admnName: string | undefined;
  admnPsw: number | undefined;
  dnos: any;
  
  constructor(private formBuilder: FormBuilder, private router: Router,
    private Admnserivce: AdmnService) { }

  ngOnInit() {
    console.log("add emp init called ");
   
    this.addForm = this.formBuilder.group({
      AdmnId: [],
      admnName: ['', Validators.required],
      admnPsw: ['', Validators.required]
    });

    
  }
  get f() {
    return this.addForm.controls;
  }
  
  onSubmit() {
    console.log(this.dnos);
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.Admnserivce.createAdmin(this.addForm)
      .subscribe((data: any) => {
        this.router.navigate(['empList']);
      });
  }
  
  }
    */

