import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from '../Service/login-service.service';
import {HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule,  MatRadioModule, RouterModule,
    FormsModule, MatToolbarModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



export class LoginComponent implements OnInit{

  
  constructor(private router:Router, private loginService:LoginServiceService, private http:HttpClient, private snak:MatSnackBar){}

 loginData ={
    email : "",
    password : "",
    role : ""
  }

  role = localStorage.getItem("role");

  ngOnInit(): void {
    this.redirectToHome();
  }

  redirectToHome(){
    if(this.role=="customer"){
      this.router.navigate(['myShop/customer-home'])
    }
    if(this.role=="shopowner"){
      this.router.navigate(['myShop/home'])
    }
  }

  formSubmit(){
    if(this.loginData.email == null || this.loginData.email.trim()=="" || this.loginData.email==undefined){
      this.snak.open("Username is required!","Ok")
    }
    else if(this.loginData.password == null || this.loginData.password.trim()=="" || this.loginData.password==undefined){
      this.snak.open("Passowrd is required!","Ok")
    }
    else if(this.loginData.role==""){
      this.snak.open("Please select your role!","Ok");
    }
    else{

      this.loginService.login(this.loginData).subscribe((res:any)=>{
        console.log(res);
        
        localStorage.setItem("role", this.loginData.role);        
        localStorage.setItem("user", JSON.stringify(res));
        if(res!=null){
          if(this.loginData.role=="customer") {
            this.router.navigate(['myShop/customer-home'])
          } else if(this.loginData.role=="shopowner"){
            this.router.navigate(['myShop/home'])
          } 
        } else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid credential !'
          })
          
        }
         
      });

    }
  }


  



}
