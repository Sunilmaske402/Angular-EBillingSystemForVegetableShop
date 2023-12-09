import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../app.url';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  

  constructor(private http:HttpClient) { }

  addShop(shop: any) {
    return this.http.post(`${baseUrl}/saveShopowner`, shop);
  }

  isEmailExist(email:string){
    return this.http.get(`${baseUrl}/shop/${email}`, {responseType:'text'});
  }

  
}
