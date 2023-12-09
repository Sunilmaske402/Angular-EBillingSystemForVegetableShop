import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../app.url';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomer(id:any){
    return this.http.get(`${baseUrl}/getAll/${id}`)
  }

  addCustomer(data:any, id:number){
    console.log('in a service')
    console.log(data, id)
     return this.http.post(`${baseUrl}/saveCustomer/${id}`,data);
  }
}
