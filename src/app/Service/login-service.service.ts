import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { baseUrl } from '../app.url';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  login(data:any){
    if(data.role=="shopowner"){
      return this.http.get(`http://localhost:8080/login/shopowner/${data.email}/${data.password}` );
    }else{
      return this.http.get(`http://localhost:8080/login/customer/${data.email}/${data.password}` );
    }
   
 }

 

//   //generate token
  public generateToken(data:any){
     return this.http.post(`${baseUrl}/auth/login`, data);
   }

//   //set token to localStorage
//  setToken(token:any){
   
//     localStorage.setItem("token", token)
//   }

//   isLogedIn(){
//     let token = localStorage.getItem("token");
//     if(token==undefined || token==null || token==""){
//       return false;
//     }
//     return true;
//   }

//   //logout
//   logout(){
//     localStorage.removeItem("token");
//     return true;
//   }

//   //getting token
//   getToken(){
//     console.log("set token");
    
//     return localStorage.getItem("token");
//   }

//   //set user 
//   setUser(user:any){
//     localStorage.setItem("user", JSON.stringify(user))
//   }

//   getUser(){
//     let user = (localStorage.getItem("token"));
//     if(user!=null || user!=""){
//         return JSON.parse(user || "");
//     }
//     else{
//       this.logout();
//       return null;
//     }
//   }

//   //get user role
//   getUserRole(){
//     let user = this.getUser();
//     return user.authorities[0].authority;
//   }

//   //get current user
//   getCurrentUser(){
//     return this.http.get(`${baseUrl}/auth/current-user`)
//   }

 

}
