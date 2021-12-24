import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmnService {
  createAdmin(value: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl="http://localhost:8090/Bank";


  constructor(private http:HttpClient) { }

  public listAllAdmin() {
    console.log(this.http.get<any[]>(this.baseUrl+'/admin'));
    return this.http.get<any[]>(this.baseUrl+'/admin');
    
    }
    public getAdminById(id:number)
   {
    console.log(this.http.get<any[]>(this.baseUrl+'/admin/'+id));
    return this.http.get<any[]>(this.baseUrl+'/admin/'+id);
   }
}
