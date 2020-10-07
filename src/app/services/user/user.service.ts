import { Injectable } from '@angular/core';
import { UserData } from 'src/app/models/user/userData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private adminPermission=false;
private id: number;	
user:UserData;
private token;
constructor() { }

setToken(token)
{
  this.token=token;
  localStorage.setItem('token',token);
}
getToken()
{
  return localStorage.getItem('token');
}
setAdminPermission(bool)
{
  this.adminPermission=bool;
}
getAdminPermission()
{
  return this.adminPermission;
}
setId(id)
{
  if(id==1) this.setAdminPermission(true);
  else this.setAdminPermission(false);
 this.id = id;

 
}
getId()
{
  return this.id;
}

}
// JSON.stringify and while getting value JSON.parse

// var testObject ={name:"test", time:"Date 2017-02-03T08:38:04.449Z"};

// Put the object into storage:

// localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage:

// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
