import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, orderUrl } from '../app.url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService{
 

  constructor(private http:HttpClient) { };

  placeOrder(cart: any,  cid: number) { 
    return this.http.post(`${orderUrl}save/${cid}`, cart);
  }

  getAllOrders(){
    return this.http.get(`${orderUrl}getAll`)
  }

  getCustomer(id:number){
    return this.http.get(`${baseUrl}getCustomer/${id}`)
  }

  getAllOrdersByCustomer(id:number){
    return this.http.get(`${baseUrl}/getCustomer/${id}`)
  }
}
