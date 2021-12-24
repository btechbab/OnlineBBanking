import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../Account/Account';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  [x: string]: any;
  private baseUrl="http://localhost:8090/Bank";
  listAllAccounts: any;
 constructor(private http:HttpClient) { }

 public addAccount(accountObj:Account){	
  console.log(accountObj);					
  return this.http.post(this.baseUrl+'/addnewAccounts',accountObj);								
  }			

}