import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { Router,NavigationEnd  } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  
  toggleNumber=1;
  homeAriaSelected = true;
  albumAriaSelected = false;
  postAriaSelected =false;
  dashboardAriaSelected=false;

  constructor(
    private navigate: NavigationService,
    private router: Router, 
    public user: UserService
  ) { 
  }


  tabClick(url)
  {
    switch(this.router.url){
      case 'albums':
        this.toggleNumber=3;
        this.homeAriaSelected = false;
        this.albumAriaSelected = true;
        this.postAriaSelected =false;
        this.dashboardAriaSelected =false;
        break;
      case 'posts':
        this.toggleNumber=2;
        this.homeAriaSelected = false;
        this.albumAriaSelected = false;
        this.postAriaSelected =true;
        this.dashboardAriaSelected =false;

        break;
      case 'home':
        this.toggleNumber=1;
        this.homeAriaSelected = true;
        this.albumAriaSelected = false;
        this.postAriaSelected =false;
        this.dashboardAriaSelected =false;

        break;
      case 'dashboard':
        this.toggleNumber=4;
        this.homeAriaSelected = false;
        this.albumAriaSelected = false;
        this.postAriaSelected =false;
        this.dashboardAriaSelected =true;


    }
    this.navigate.navigateTo('/home/'+url);
  }
  logout()
  {
    localStorage.removeItem('token');
    localStorage.clear();
    this.navigate.navigateTo('/sign');
  }
}
