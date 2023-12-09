import { Routes } from '@angular/router';
import { RegisterShopComponent } from './register-shop/register-shop.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { AllcustomerComponent } from './allcustomer/allcustomer.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AllbillsComponent } from './allbills/allbills.component';
import { customerGuardGuard } from './Gaurd/customer-guard.guard';
import { shopownerGuardGuard } from './Gaurd/shopowner-guard.guard';
import { CustomerHomeComponent } from './customer-home/customer-home.component';

export const routes: Routes = [
    {path : "", component:LoginComponent},

    {path:"registerShop", component:RegisterShopComponent},
    
    {path:"myShop", component:ShopComponent, 
        children : [
            {path:"home", component:ShopHomeComponent, pathMatch:"full", canActivate:[shopownerGuardGuard]},
            {path:"allProducts", component:AllProductsComponent, pathMatch:"full", canActivate:[shopownerGuardGuard]},
            {path:"allCustomers", component:AllcustomerComponent, canActivate:[shopownerGuardGuard]},
            {path:"addCustomer", component:AddCustomerComponent, canActivate:[shopownerGuardGuard]},
            {path:"cart", component:AddToCartComponent, canActivate:[shopownerGuardGuard]},
            {path:"allCustomers/bills", component:AllbillsComponent, canActivate:[shopownerGuardGuard]},
            {path:"allCustomers/bills/:cid", component:AllbillsComponent, canActivate:[shopownerGuardGuard]},
            {path:"customer-home", component:CustomerHomeComponent, canActivate:[customerGuardGuard]}
        ]
    },

    
    

];


export class AppRoutingModule{

}

