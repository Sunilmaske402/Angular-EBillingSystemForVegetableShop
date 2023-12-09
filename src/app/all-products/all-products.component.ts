import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {  MatDialog,  MatDialogActions,   MatDialogClose,   MatDialogContent,  MatDialogTitle,} from '@angular/material/dialog';
import { AllProductService } from '../Service/all-product.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartService } from '../Service/cart.service';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { imageUrl } from '../app.url';
import Swal from 'sweetalert2';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, AddToCartComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {


  imageUrl:any = imageUrl;

  constructor(public dialog: MatDialog, private productService:AllProductService, 
      private cartService:CartService    
    ) {}

    sid = (JSON.parse(localStorage.getItem("user") || '')).id;
    
  ngOnInit(): void {
    this.getProductsOfShop();
  }

  openDialog() {
    this.dialog.open(DialogNewProduct);
  }

  updateProductDialog(product:any){
    this.dialog.open(UpdateProductComponent, {
      data:{
        product:product,
        sid:this.sid
      }
    })
  }
  

  allProductsOfShop:any = [];

  getProductsOfShop(){
    this.productService.getAllProductsOfShop(this.sid).subscribe((res)=>{
      this.allProductsOfShop = res;
      console.log(res)
    })
  }

  

  deleteProduct(pid: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProductById(pid).subscribe((res:any)=>{
          console.log(res)
          Swal.fire(
            'Deleted!',
            'Product has been deleted.',
            'success'
          ) 
          this.getProductsOfShop();
        });

        
       
      }
    })
     
      
    }

  addToCart(data:any){
      this.cartService.addToCart(data);   
  }



  

}

@Component({
  selector: 'add-product-dialog',
  templateUrl : 'add-product.dialog-box.html',
  styleUrl: './all-products.component.css',
  standalone: true,
  imports: [MatDialogClose, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, MatProgressBarModule],
})
export class DialogNewProduct{

  productImage: any = null;

onFileSelected(event: any): void {
   this.productImage = event.target.files[0] ?? null;
}

flag=false;


product = {
  name:"",
  price:""
}




constructor(private productService:AllProductService, private router:Router, private dialog: MatDialog,
  private prodCompo:AllProductsComponent
  ){}

  addProduct(){
    this.flag = true;
      this.productService.addProduct(this.product, this.productImage).subscribe((res)=>{
      this.flag =false;
      Swal.fire({
        title: 'God Job',
        text: "Product added successfully!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Done!',
        cancelButtonText: 'Add New Product',
      }).then((result) => {
        if (result.isConfirmed) {
          this.prodCompo.ngOnInit();
          this.dialog.closeAll();
         window.location.reload();
         
        }
      })

      console.log(res)
    });
  }



}

