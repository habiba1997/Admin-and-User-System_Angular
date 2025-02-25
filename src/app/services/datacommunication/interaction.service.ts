import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from 'src/app/models/posts/post';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }
  
  // appointment
  private behavioralsubjForPost= new BehaviorSubject<any>(new Post);
  observableForPost =this.behavioralsubjForPost.asObservable();



sendPost(post: Post){
  console.log("My post is sent: ", JSON.stringify(post));
  this.behavioralsubjForPost.next(post);
 }

}
