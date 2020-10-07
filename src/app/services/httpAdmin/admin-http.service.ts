import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  user:User;
  
  Host_Port ="https://reqres.in";

  constructor(
    private http:HttpClient) { 
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin' :'*'
 
    })
  };

getUsers(){
  return this.http.get<any>(this.Host_Port+"/api/users",
    this.httpOptions);
}

getUser(url){
  console.log("get user url: ",url);
  return this.http.get<any>(this.Host_Port+url,
    this.httpOptions);
}


createUser(obj)
{
    return this.http.post<any>(this.Host_Port+"/api/users",
    obj,this.httpOptions);
}

putUser(obj,url)
{
    console.log("get user url: ",url);
    return this.http.put<any>(this.Host_Port+url,
    obj,this.httpOptions);
}

patchUser(obj,url)
{
    console.log("get user url: ",url);
    return this.http.patch<any>(this.Host_Port+url,
    obj,this.httpOptions);
}

deleteUser(url)
{
    console.log("get user url: ",url);
    return this.http.delete<any>(this.Host_Port+url,this.httpOptions);
}

host_port="https://jsonplaceholder.typicode.com";

getJson(url){
    return this.http.get<any>(this.host_port+url,
    this.httpOptions);
}

}
