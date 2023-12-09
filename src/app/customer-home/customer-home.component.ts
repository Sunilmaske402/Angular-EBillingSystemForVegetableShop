import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../Service/customer.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './customer-home.component.html',
  styleUrl: './customer-home.component.css'
})
export class CustomerHomeComponent implements OnInit {

  customer:any;
  bills:any;

  constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem("user") || "");
    this.bills = this.customer.bills;
   Swal.fire({
    "icon":"success",
    "text":"Welcome To Home"
   })
    
  }


}
