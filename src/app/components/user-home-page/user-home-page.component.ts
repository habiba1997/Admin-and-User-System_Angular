import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { UserService } from 'src/app/services/user/user.service';
import { NavigationService } from 'src/app/services/navigate/navigation.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit  {

  constructor(
    private http: HttpService,
    private userService:UserService,
    private navigate: NavigationService
  ) { }
  user;

  ngOnInit() {
    this.http.getUser(this.userService.getId()).subscribe((user)=>{
      this.user = user;      

    },
    (error)=>
    {
      window.alert("Error: "+ JSON.stringify(error));
      this.navigate.navigateTo('/sign');
    },
    ()=>
    {
      this.user=this.userService.user;      

    });
  }
 
}
