import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'

export const customerGuardGuard: CanActivateFn = (route, state) => {

 let router = inject(Router);

  const userString = (localStorage.getItem("user"));
  let user:any;
  if(userString!=null || userString!=""){
    user = JSON.parse(userString || "");
  }
  const role = localStorage.getItem("role");

  if(user!=null && user!="" && role=="customer"){
    return true;
  }
  router.navigate(['']);
  return false;
};
