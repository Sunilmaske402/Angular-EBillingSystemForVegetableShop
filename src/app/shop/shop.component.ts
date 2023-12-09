import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,  RouterOutlet,  MatToolbarModule, RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {

  constructor( private route:ActivatedRoute, private router:Router){}

  shop:any;
  shopId:any;
  shopName:any;
  role = localStorage.getItem("role");

  ngOnInit(): void {
    this.getCurrentShopOwner();
  }

  getCurrentShopOwner(){
    this.shop = JSON.parse(localStorage.getItem("user") || "");
    this.shopId = this.shop.id;
   this.shopName = this.shop.name;
  }

  logout(){
    localStorage.clear();
    this.router.navigate([""]);
  }

}






