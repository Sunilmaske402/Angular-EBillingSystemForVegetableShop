import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AllProductService } from './Service/all-product.service';
import { CustomerService } from './Service/customer.service';
import { CartService } from './Service/cart.service';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AllbillsComponent } from './allbills/allbills.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { loginInterceptorInterceptor } from './Service/login-interceptor.interceptor';
import { AllProductsComponent } from './all-products/all-products.component';
export const appConfig: ApplicationConfig = {
  providers: [
    
    provideRouter(routes),
    
    //provideHttpClient(withInterceptors([loginInterceptorInterceptor])),
    
    provideAnimations(), provideHttpClient(), AllProductService, CustomerService,
     AllProductService, CartService,   UpdateProductComponent, AllbillsComponent, MatSnackBar,
     AllProductsComponent
     

  ]
};
