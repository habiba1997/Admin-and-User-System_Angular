import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

    title = 'Angular 7 Project!';
    constructor() { }
 
    
  
    onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);
    }
    
  }