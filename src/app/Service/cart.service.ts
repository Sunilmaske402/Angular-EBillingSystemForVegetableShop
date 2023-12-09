import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orderUrl } from '../app.url';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  constructor(private http:HttpClient) { }


  addToCart(data:any){
    let cart = localStorage.getItem("cart")
    if(cart==null){
      let OrderedItem = [];
      let item = {
          "pid":data.id,
          "productName":data.name,
          "productPrice":data.price,
        "quantity":1,        
      }

      OrderedItem.push(item);
      localStorage.setItem("cart", JSON.stringify(OrderedItem))

      Swal.fire({
        icon:"success",
        title:"Item added to cart"
      })
    }
    else{

       let productCart = JSON.parse(cart);

      let oldProduct = productCart.find((p:any)=>p.pid==data.id);

      //product is present
      if(oldProduct){
          productCart.map((product:any)=>{
            if(product.pid == data.id){
              product.quantity++;
            }
          })
          Swal.fire({
            icon:"success",
            title:"Product Quantity increases"
          })
      }else{
        
      let cartItem = {
        "pid":data.id,
        "productName":data.name,
        "productPrice":data.price,
        "quantity":1,        
      }
            
        productCart.push(cartItem);  
        Swal.fire({
          icon:"success",
          title:"Item added to cart"
        })
      }
      localStorage.setItem("cart", JSON.stringify(productCart))
      
    }
    

    console.log(cart);
    
    
   }

   //remove item by id
   removeOneItemOfCart(pid:any){
    let cart = localStorage.getItem("cart")
    let productCart = JSON.parse(cart || '[]');
    let products = productCart.filter((cartProd:any)=>{
      if(cartProd.pid!=pid){
        return cartProd;
      }
    })

    localStorage.setItem("cart", JSON.stringify(products));
    console.log(cart)
   }

  
 
  //set quantity
  setQuantity(id:number, num:number){       
    let cart = JSON.parse(localStorage.getItem("cart") || '[]');
      cart.map((item:any)=>{
        
          if(item.pid == id){
            
            item.quantity = num;
          }
      }) 
      localStorage.setItem("cart", JSON.stringify(cart));
    }

}
