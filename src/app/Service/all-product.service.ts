import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productUrl } from '../app.url';

@Injectable({
  providedIn: 'root'
})
export class AllProductService {
  
  constructor(private http:HttpClient) {  }

  

  getAllProductsOfShop(id:any){
    return this.http.get(`${productUrl}getAll/${id}`)
  }

  addProduct(product:any, image:any){
    let formData = new FormData();
    formData.append("image", image);
    formData.append("product", JSON.stringify(product))
    return this.http.post(`${productUrl}save/1`, formData);
  }

  deleteProductById(pid: any) {
    return this.http.delete(`${productUrl}deleteProduct/${pid}`,  {responseType:'text'});
  }

  updateProduct(product:any, sid:number){
     return this.http.put(`${productUrl}${sid}/updateProduct`, product);
  }

}
