import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule,  MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'EbillingSystemForVegetableShop';
  user:any=null;
  role:any=null;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.role = localStorage.getItem("role");
  }
  

  


  logout(){
    localStorage.clear();
    this.router.navigate([""]);
  }
  



}
