import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransService {

  private baseUrl="http://localhost:8090/Bank";


  constructor(private http:HttpClient) { }

  public listAllTransaction() {
    console.log(this.http.get<any[]>(this.baseUrl+'/transaction'));
    return this.http.get<any[]>(this.baseUrl+'/transaction');
    
    }
    public getTransactionById(id:String)
   {
    console.log(this.http.get<any>(this.baseUrl+'/transaction/'+id));
    return this.http.get<any>(this.baseUrl+'/transaction/'+id);
   }

   
  public addTransaction(transactionObj:Transaction){	
    console.log(transactionObj);					
    return this.http.post(this.baseUrl+'/addTransaction',transactionObj);								
    }	
}
