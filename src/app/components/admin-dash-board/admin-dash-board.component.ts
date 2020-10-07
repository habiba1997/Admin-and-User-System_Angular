import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { AdminHttpService } from 'src/app/services/httpAdmin/admin-http.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent {

  httpRequests=[
    {
      method:'Get',
      name: "List Users",
      url: '/api/users',
      isRequestBody: false,
      requestBody: null,
      isUrlId: false,
      responce:'',
      isresponceMessage:null,
      responceMessage:''    
    },
    {
      method:'Get',
      name: "Single Users",
      url: '/api/users/:id',
      isRequestBody: false,
      requestBody: null,
      isUrlId: true,
      responce:'',
      isresponceMessage:null,
      responceMessage:''
    },
    {
      method:'Post',
      name: "Create User",
      url: '/api/users',
      isRequestBody: true,
      requestBody: JSON.stringify({
          "name": "morpheus",
          "job": "leader"
      }),
      isUrlId: false,
      responce:'',
      isresponceMessage:null,
      responceMessage:''
    },
    {
      method:'Put',
      name: "Update User",
      url: '/api/users/:id',
      isRequestBody: true,
      requestBody: JSON.stringify({
        "name": "morpheus",
        "job": "zion resident"
    }),
      isUrlId: true,
      responce:'',
      isresponceMessage:null,
      responceMessage:''
    },
    {
      method:'Patch',
      name: "Update User",
      url: '/api/users/:id',
      isRequestBody: true,
      requestBody: JSON.stringify({
        "name": "morpheus",
        "job": "zion resident"
    }),
      isUrlId: true,
      responce:'',
      isresponceMessage:null,
      responceMessage:''
    },
    {
      method:'Delete',
      name: "Delete User",
      url: '/api/users/:id',
      isRequestBody: false,
      requestBody: null,
      isUrlId: true,
      responce:'',
      isresponceMessage:null,
      responceMessage:''
    },
    {
      method:'Get',
      name: "One User Posts",
      url: '/users/:id/posts',
      isRequestBody: false,
      requestBody: null,
      isUrlId: true,
      responce:'',
      isresponceMessage:null,
      responceMessage:''
    },
    {
      method:'Get',
      name: "One Post Comments",
      url: '/posts/:id/comments',
      isRequestBody: false,
      requestBody: null,
      isUrlId: true,
      responce:'',
      isresponceMessage:null,
      responceMessage:''
    },
    {
      method:'Get',
      name: "One User Albums",
      url: '/albums?userId=:id',
      isRequestBody: false,
      requestBody: null,
      isUrlId: true,
      responce:'',
      isresponceMessage:null,
      responceMessage:''
    },
    {
      method:'Get',
      name: "One Album Images",
      url: '/photos?albumId=:id',
      isRequestBody: false,
      requestBody: null,
      isUrlId: true,
      responce:'',
      isresponceMessage:null,
      responceMessage:''
    },

  ]

  constructor(
    private http: AdminHttpService
  ) { }

  send(i)
  {
    let funReturn;
    switch(i)
    {
      case 0:
        funReturn = this.http.getUsers();;
        break;
      case 1:
        funReturn=this.http.getUser(this.httpRequests[i].url);
        break;
      case 2:
        funReturn = this.http.createUser(this.httpRequests[i].requestBody);;
        break;
      case 3:
        funReturn=this.http.putUser(this.httpRequests[i].requestBody,this.httpRequests[i].url);
        break;
      case 4:
        funReturn=this.http.patchUser(this.httpRequests[i].requestBody,this.httpRequests[i].url);
        break;
      case 5:
        funReturn=this.http.deleteUser(this.httpRequests[i].url);
        break; 
      default:
        funReturn=this.http.getJson(this.httpRequests[i].url);

    }
    funReturn.subscribe(
      (data)=>{
        this.httpRequests[i].responce = JSON.stringify(data);
      },
      (error)=>{
        this.httpRequests[i].isresponceMessage = 'error';
        this.httpRequests[i].responceMessage='Error: '+JSON.stringify(error);
      },
      ()=>{
        this.httpRequests[i].responceMessage='Http request was successfully executed';
        this.httpRequests[i].isresponceMessage = 'NoError';
      }
    )
    
  }
}
