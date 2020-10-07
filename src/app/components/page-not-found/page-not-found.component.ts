import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigate/navigation.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit  {

  constructor(private  navigate: NavigationService) { }
  ngOnInit(): void {
    window.alert("Page Not Found");
    this.navigate.navigateTo('/sign');
  }

}
