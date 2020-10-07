import { Injectable } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { CanActivate } from '@angular/router';
import { NavigationService } from '../../services/navigate/navigation.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
  
  
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private user: UserService) {

   }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log("checking if intercept function is called");

        const token = localStorage.getItem('token');
        if(token)
        {
            // console.log("interceptor send token");

            //Add authorization header to request
            const clonedHttp = req.clone({
                headers: req.headers.set("Authorization",
                "Bearer " + token)
            });
            return next.handle(clonedHttp);

        }
        else{
            // console.log("interceptor send No token");

            return next.handle(req);
        }


    }
    
}
