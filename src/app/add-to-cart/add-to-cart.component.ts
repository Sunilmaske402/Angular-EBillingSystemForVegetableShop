import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../Service/cart.service';
import { imageUrl } from '../app.url';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import Swal from 'sweetalert2';
import { BillService } from '../Service/bill.service';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomerService } from '../Service/customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent implements OnInit {


  constructor(private cartService:CartService, private billService:BillService, private custoService:CustomerService,
    private snack:MatSnackBar, private router:Router
    ){}

  ngOnInit(): void {
    this.getAllCartItem(); 
    this.getAllCustomerOfShop();  
  }


  imageUrl:any=imageUrl;

   
  cart:any;
  totalAmt=0;

   getAllCartItem(){
    let cartString = localStorage.getItem("cart");
	 this.cart = JSON.parse(cartString || '[]') ;
   this.getTotalAmt();
   }

   getTotalAmt(){
    let sum=0;
    this.cart.forEach((product:any) => {
      sum = sum + product.productPrice*product.quantity;
    });
    this.totalAmt = sum;
   }
 
   

   

   clearCart(){
    localStorage.removeItem("cart");
    Swal.fire({
      icon:'success',
      title:'Cart is empty now!'
    })
    this.getAllCartItem();
   }

   removeItemOfCart(pid:any) {
        this.cartService.removeOneItemOfCart(pid);
        this.getAllCartItem();
    }

      setQuantity(id:any, event:any) {        
        this.cartService.setQuantity(id, event.target.value);
        this.getAllCartItem();
      }

      
   //select customer
   CustomerList:any;
   selectedCustomerId:any ;

   getAllCustomerOfShop(){
    this.custoService.getAllCustomer(1).subscribe((res)=>{
      this.CustomerList = res;
      console.log(res)
    })
   }
    

   amtPaid = 0;
      

   placeOrder(){

    let order={
      "orderedItem" : JSON.parse(localStorage.getItem("cart") || '[]'),
      "amtPaid" :   this.amtPaid    
     }

     console.log(order.amtPaid)
   
       if(this.selectedCustomerId==undefined){
        this.snack.open("Please select customer !", "ok")
       }else {
        this.billService.placeOrder(order, this.selectedCustomerId).subscribe((res)=>{
          Swal.fire({
            icon : 'success',
            title : 'Good Job',
            text : 'Order place Successfully',
            confirmButtonColor: '#3085d6',       
           confirmButtonText: 'Ok!', 
           }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate([`myShop/allCustomers/bills/${this.selectedCustomerId}`])
            }
          })
       })
    
       }
   }



  
}


