import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { TokenObject } from '../../models/user/token';
import { UserService } from '../user/user.service';
import { User } from 'src/app/models/user/user';
import { UserData } from 'src/app/models/user/userData';
import { Post } from 'src/app/models/posts/post';
import { Album } from 'src/app/models/album/album';
import { ImageUrl } from 'src/app/models/album/image';
import { Comment } from 'src/app/models/posts/comment';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
      
      user:User;
  
      Host_Port ="https://reqres.in";
    
      constructor(
        private http:HttpClient,
        private userData: UserService) { 
      }
  
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin' :'*'
     
        })
      };
  

    
       // Simulate POST /todos
      login(user:   User):Observable<TokenObject> {
        let url = this.Host_Port+"/api/login";
        return this.http.post<any>(url,
          user,this.httpOptions).pipe(
            map((data:TokenObject)=>
            {
              return new TokenObject(data.token,null); 
            })
          );
      }


      register(user:   User):Observable<TokenObject> {
        let url = this.Host_Port+"/api/register";
        return this.http.post<any>(url,
          user,this.httpOptions).pipe(
            map((data:TokenObject)=>
            {
              return new TokenObject(data.token, data.id); 
            })
          );
      }
  
        // Simulate GET /todos
        getUser(id){
          return this.http.get<any>(this.Host_Port+"/api/users/"+id,
          this.httpOptions).pipe(
            map((data)=>
            {

              this.userData.user = new UserData
              (data.data.id,data.data.email,data.data.first_name,data.data.last_name,data.data.avatar);;

                return this.userData.user;
            })
          
          );
        }
        
         // Simulate GET /todos
    getMyPosts(){
      let url = "https://jsonplaceholder.typicode.com/users/"+this.userData.getId()+"/posts";

      return this.http.get<any>(url,this.httpOptions).pipe(
        flatMap(posts => posts),
        map((post:Post)=>
        {
            return post;
        })
       
      );
    }
    
    getMyComments(postId){
      let url = "https://jsonplaceholder.typicode.com/posts/"+postId+"/comments";

      return this.http.get<any>(url,this.httpOptions).pipe(
        flatMap(comments => comments),
        map((comment:Comment)=>
        {
            return comment;
        })
       
      );
    }

    getMyAlbums(){
      // let url = "https://jsonplaceholder.typicode.com/albums?userId="+this.userData.getId();
      let url = "https://jsonplaceholder.typicode.com/albums";

      return this.http.get<any>(url,this.httpOptions).pipe(
        flatMap(images => images),
        map((album: Album)=>
        {
            return album;
        })
      );
       
    
    }
    getAllPhotos()
    {
      let url ="https://jsonplaceholder.typicode.com/photos";
      return this.http.get<any>(url,this.httpOptions);
    }
    getUsers()
    {
      let apiurl = "https://jsonplaceholder.typicode.com/users";
      
      return this.http.get<any>(apiurl,this.httpOptions);

    }
    getMyImages(albumId){      
      let url = "https://jsonplaceholder.typicode.com/photos?albumId="+albumId;

      return this.http.get<any>(url,this.httpOptions).pipe(
        flatMap(images => images),
        map((image:ImageUrl)=>
        {
            return image;
        })
       
      );
    }

 
}
