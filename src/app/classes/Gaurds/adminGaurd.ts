import { Injectable } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { CanActivate } from '@angular/router';
import { NavigationService } from '../../services/navigate/navigation.service';


@Injectable({
    providedIn: 'root'
})
  
  
export class AdminLoggedInGaurd implements CanActivate {

  constructor(
    private user: UserService, 
    private navigate: NavigationService) {

   }
    canActivate() {

        if(localStorage.getItem('token') && this.user.getId()==1){
            console.log("Has permission as an Admin");
            return true;
        }
        else{
            this.navigate.navigateTo('/sign')
            window.alert("You don't have admin permissions to view this page");
            return false;


        }
    }
}
