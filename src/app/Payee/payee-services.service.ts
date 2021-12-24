import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payee } from './Payee';

@Injectable({
  providedIn: 'root'
})
export class PayeeServicesService {

  listAllPaye() {
    throw new Error('Method not implemented.');
  }

  private baseUrl="http://localhost:8090/Bank";
  constructor(private http:HttpClient) { }

 public fetchPayeeDetails()
 {
  console.log("inside service"+this.http.get<any[]>(this.baseUrl+'/Payee'));
  return this.http.get<any[]>(this.baseUrl+'/Payee');
 }

 public fetchPayeeDetailsById (id:number)
   {
    console.log(this.http.get<any>(this.baseUrl+'/Payee/'+id));
    return this.http.get<any>(this.baseUrl+'/Payee/'+id);
   }

   
  public addPayee(PayeeObj:Payee){	
    console.log(PayeeObj);					
    return this.http.post(this.baseUrl+'/addPayee',PayeeObj);								
    }	

}