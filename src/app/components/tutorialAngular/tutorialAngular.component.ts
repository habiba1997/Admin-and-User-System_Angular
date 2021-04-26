import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tutorialAngular',
  templateUrl: './tutorialAngular.component.html',
  styleUrls: ['./tutorialAngular.component.css']
})
export class TutorialAngularComponent implements OnInit,OnChanges {

  isAvailable = true;
  title = 'Angular 7 Tutorial!';
  
  todaydate = new Date();
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  constructor() {
    console.log("hey");
    console.log(this.title);
  }
  ngOnChanges() {
    console.log("hey");
    console.log(this.title);
  }

  ngOnInit(): void {
    console.log("hey");
    console.log(this.title);
  }

}
