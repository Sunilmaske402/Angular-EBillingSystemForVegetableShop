import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BillService } from '../Service/bill.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allbills',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './allbills.component.html',
  styleUrl: './allbills.component.css'
})
export class AllbillsComponent implements OnInit{

   constructor(private billService:BillService, 
              private readonly route:ActivatedRoute
              ){}

    cid:any;
    shop:any

  ngOnInit(): void {
    this.shop = JSON.parse(localStorage.getItem("user") || "");   
    this.route.paramMap.subscribe(
      (param)=>{
        this.cid = param.get("cid");
      }
    )
   this. getBillsByCustomer();
   console.log(this.shop);
   
  }

 

   customerDetails:any;
   bills:any;
 
   getBillsByCustomer(){
    this.billService.getAllOrdersByCustomer(this.cid).subscribe((res:any)=>{
      this.customerDetails=res;
      this.bills=res.bills;
      console.log(res.bills)
     
    });
  }


}
