import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transfer } from './Transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferServiceService {
  private baseUrl="http://localhost:8090/Bank";
  
 constructor(private http:HttpClient) { }

 public listAllTransfer()
 {
  console.log(this.http.get<any[]>(this.baseUrl+'/Transfer'));
  return this.http.get<any[]>(this.baseUrl+'/Transfer');
 }
 
 public fetchTransferByAcc(id:number)
  {
    console.log(this.http.get<any>(this.baseUrl+'/Transfer/'+id));
    return this.http.get<any>(this.baseUrl+'/Transfer/'+id);
  }

  public addTransfer(tranObj:Transfer){	
    console.log(tranObj);					
    return this.http.post(this.baseUrl+'/addTransfer',tranObj);								
    }	
}