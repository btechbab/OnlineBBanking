import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 // displayLogin() {
    //throw new Error('Method not implemented.');
 // }

 // constructor() { }
 private baseUrl="http://localhost:8090/Bank";
  displayLogin: any;
  displayLoginById: any;
  logoutButton: any;
  constructor(private http:HttpClient) { }

 public displaylogin()
 {
  console.log(this.http.get<any[]>(this.baseUrl+'/Logins'));
  return this.http.get<any[]>(this.baseUrl+'/Logins');
 }
  public displayloginbyid(id:number)
   {
    console.log(this.http.get<any>(this.baseUrl+'/Logins/'+id));
    return this.http.get<any>(this.baseUrl+'/Logins/'+id);
   } 

   public addLogin(loginObj:Login){	
      console.log(loginObj);					
      return this.http.post(this.baseUrl+'/addlogin',loginObj);								
      }			
  
}
