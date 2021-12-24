import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './Account';

@Injectable({
  providedIn: 'root'
})
export class AccServiceService {
  [x: string]: any;
  private baseUrl="http://localhost:8090/Bank";
  listAllAccounts: any;
 constructor(private http:HttpClient) { }

 public listAllCustomers()
 {
  console.log(this.http.get<any[]>(this.baseUrl+'/Accounts'));
  return this.http.get<any[]>(this.baseUrl+'/Accounts');
 }
 
 public getAccByAccNo(id:number)
  {
    console.log(this.http.get<any>(this.baseUrl+'/Accounts/'+id));
    return this.http.get<any>(this.baseUrl+'/Accounts/'+id);
  }

  public addAccount(accountObj:Account){	
    console.log(accountObj);					
    return this.http.post(this.baseUrl+'/addnewAccounts',accountObj);								
    }			

}


