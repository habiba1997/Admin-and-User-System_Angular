import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { NavigationService } from 'src/app/services/navigate/navigation.service';


@Injectable({
    providedIn: 'root'
})
  
  
  export class OnlyLoggedInUserGaurd implements CanActivate {

  constructor(
    private user: UserService, 
    private navigate: NavigationService) {

   }
    canActivate() {

        if(localStorage.getItem('token')){
            console.log("Has permission");
            return true;
        }
        else{
            this.navigate.navigateTo('/sign')
            window.alert("You don't have permission to view this page");
            return false;


        }
    }
}
