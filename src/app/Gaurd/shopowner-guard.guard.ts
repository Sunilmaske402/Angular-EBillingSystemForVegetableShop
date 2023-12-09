import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';

export const shopownerGuardGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);

  const userString = (localStorage.getItem("user"));
  
  const role = localStorage.getItem("role");

  if(userString!=null && role=="shopowner"){
    return true;
  }
  router.navigate(['']);
  return false;
};
