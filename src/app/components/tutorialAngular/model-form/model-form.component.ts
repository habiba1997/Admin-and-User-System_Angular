import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
// Angular has built-in validators such as mandatory field, minlength, maxlength, and
//pattern. These are to be accessed using the Validators module.

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit{

 
  title = 'Angular 7 Project!';
  emailid;
  formdata;

  constructor() { }
  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
   }

  //  In the function that we have created, we will check if the length of the characters entered
  //  is appropriate. If the characters are less than five, it will return with the passwd true as
  //  shown above - return {"passwd" : true};. If the characters are more than five, it will
  //  consider it as valid and the login will be enabled.
   passwordvalidation(formcontrol) {
      if (formcontrol.value.length < 5) {
        return {"passwd" : true};
      }
    
    }

  onClickSubmit(data) 
  {   
    this.emailid = data.emailid;
  }

}
