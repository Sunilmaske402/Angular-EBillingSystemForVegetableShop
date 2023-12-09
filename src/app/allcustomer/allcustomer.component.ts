import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CustomerService } from '../Service/customer.service';
import {  RouterModule } from '@angular/router';
import { AllbillsComponent } from '../allbills/allbills.component';

@Component({
  selector: 'app-allcustomer',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule],
  templateUrl: './allcustomer.component.html',
  styleUrl: './allcustomer.component.css'
})
export class AllcustomerComponent implements OnInit {

  constructor(private customerService:CustomerService, private billComp:AllbillsComponent
    ){}

    
  customers:any;

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    let shop = JSON.parse(localStorage.getItem("user") || "");    
   
    this.customerService.getAllCustomer(shop.id).subscribe(res=>{
     this.customers = res;
     this.getBalanceAmt(res);
    })
   
  }


  balanceAmtArray:Array<number> = [];

  
  getBalanceAmt(cust:any){
    console.log(cust);
    
    cust.forEach((customer:any) => {
      let sum=0;
      if(customer!=undefined){
        customer.bills.forEach((bill:any)=>{
          if(bill!=undefined){
            sum = sum + (bill.totalPrice - bill.amtPaid);
          }
        })
      }
      this.balanceAmtArray.push(sum)
    });
  }

  

 

  filterTable(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue==""){
        this.ngOnInit();
    }else{
      this.customers = this.customers.filter((item:any)=>{
        return item.name.toLocaleLowerCase().match(filterValue.toLocaleLowerCase());
      })
    }
     
  }

}
