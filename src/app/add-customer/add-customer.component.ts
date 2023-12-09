import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CustomerService } from '../Service/customer.service';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, FormsModule, MatProgressSpinnerModule],
   templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  shopId = (JSON.parse(localStorage.getItem("user") || '')).id;

  constructor(private customerService:CustomerService,
    private router:Router
    ){}

  customer ={
    name:"",
    mobNo:"",
    email:"",
    address:"",
    password:""
  }

  confirmPass="";

  addCustomer(){
    if(this.customer.name =="" || this.customer.email=="" || this.customer.mobNo=="" || this.customer.password=="" || this.customer.address==""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Some field are empty!'
      })
    }
    else if(this.customer.password!=this.confirmPass){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password not match!'
      })
    }
    else{
    this.customerService.addCustomer(this.customer, this.shopId).subscribe((res)=>{
      console.log(res)
      Swal.fire({
        title: 'God Job',
        text: "Customer added successfully!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Done!',
        cancelButtonText: 'Add New Customer',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/myShop/allCustomers'])
        }
      })

    });
  }
  }

}
