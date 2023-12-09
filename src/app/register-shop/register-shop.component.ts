import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShopService } from '../Service/shop.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import Swal from 'sweetalert2';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-register-shop',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule,MatProgressSpinnerModule, MatInputModule, MatButtonModule,
     RouterModule, FormsModule, MatToolbarModule],
  templateUrl: './register-shop.component.html',
  styleUrl: './register-shop.component.css'
})
export class RegisterShopComponent {

  constructor(private shopService:ShopService, private router:Router){}



  shop ={
    name:"",
    email:"",
    mobNo:"",
    address:"",
    password:"",    
  }

  confirmPass="";
  
  flag = false;

  registerShop(){

    

    if(this.shop.name =="" || this.shop.email=="" || this.shop.mobNo=="" || this.shop.password=="" || this.shop.address==""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Some field are empty!'
      })
    }
    else if(this.shop.password!=this.confirmPass){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password not match!'
      })
    }
    else {
      this.shopService.isEmailExist(this.shop.email).subscribe(res=>{
        if(res=="true"){
          console.log("email exist");
          Swal.fire("This email already used!", "Please use other email.")
        }
        else{

        
    this.flag = true;
     
    this.shopService.addShop(this.shop).subscribe((res)=>{
      this.flag = false;
      Swal.fire({
        title: 'God Job',
        text: "Shop register successfully!",
        icon: 'success',
        confirmButtonColor: '#3085d6',       
        confirmButtonText: 'Ok!',       
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate([''])
        }
      })

    });

  }
        
} )

  }

  }

}
