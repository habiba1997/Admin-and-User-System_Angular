import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { NavigationService } from 'src/app/services/navigate/navigation.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  login:boolean=true;


  userData = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$")]),
    password: new FormControl('',[
      Validators.required,
  ])
    });
  
  constructor(
    private http: HttpService,
    private navigate: NavigationService, 
    private user: UserService) { }

  ngOnInit() {
    
  }
  signToggle()
  {
    console.log("current login toggle: ",this.login);
    this.login=!this.login;
  }

  signing(email,pass)
  {
  
    if(!this.validation(email,pass)) return;

    if(this.login) 
    {
      console.log("loggining with: ", email, pass);
      this.http.login(new User(email,pass)).subscribe((data)=>{
        console.log("login successfully", data);        
        this.user.setId(1);
        this.user.setToken(data.token);
      },
      (error)=>{
        alert("There is an error in login: " + JSON.stringify(error));
      },
      ()=>{
        console.log("Log In successfully");
        this.navigate.navigateTo('/home');

      });

    }


    else{
     
      if(pass.length< 6){
        alert("Password can't be less than 6 characters");
        return;
      }
      console.log("loggining with: ", email, pass);
      this.http.register(new User(email,pass)).subscribe((data)=>{

        console.log("registered successfully", data.id);
        this.user.setId(data.id);
        this.user.setToken(data.token);

      },
      (error)=>{
        alert("There is an error in signUp: " + JSON.stringify(error));
      },
      ()=>{
        console.log("registered successfully");
    
        this.navigate.navigateTo('/home');
      });
    
    }

  }
  validation(email,pass)
  {
    if(this.emailValid.errors && this.passwordValid.errors)
    {
      alert("Please provide a valid Email and Password");
      return false;
    }
    else if(this.emailValid.errors)
    {
      if(this.emailValid.errors?.pattern)
      {
        alert("Please provide a valid email address");

      }
      else if(this.emailValid.errors?.required)
      {
        alert("Email is required");
      }
      return false;
    }
    else if(this.passwordValid.errors)
    {
      alert("Password is required");
      return false;

    }
    else
    {
      return true;
    }
   
  }
  get emailValid(){
    return this.userData.get('email')
    }
  
  get passwordValid(){
    return this.userData.get('password')
    }
}
