import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const loginInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("In a interceptor");
  const token = localStorage.getItem("token");
  if(token!=null || token!=undefined){
    console.log("token   "+token);

    
    
    req.clone({
      setHeaders:{
        Authorization : 'Bearer '+token
      }
    }
      
    )
  }

  let req1 = req.clone({
    setHeaders:{
      Authorization : 'Bearer '+token
    }
  })

  var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  
  return next(req1);
};
