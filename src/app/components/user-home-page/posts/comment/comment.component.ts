import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { Comment } from 'src/app/models/posts/comment';
import { InteractionService } from 'src/app/services/datacommunication/interaction.service';
import { Post } from 'src/app/models/posts/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  
  constructor(
    // private route: ActivatedRoute
    private http: HttpService,
    private communication: InteractionService) { }

  routeSub;
  comments;
  showMyComments=false;
  post:Post;

  ngOnInit() {
    // this.routeSub = this.route.params.subscribe(params => {

    this.communication.observableForPost.subscribe(
      (post)=> { 
      this.post = post;
      console.log("comment post id: ", post.id);
          
  });
}

showComments()
{
  let array = new Array<Comment>();
  this.comments = new Array<Comment>();
  this.http.getMyComments(this.post.id).subscribe(
    (comment)=>{
      array.push(comment);
    },
    (error)=>{
      window.alert("Error in getting your posts: "+ JSON.stringify(error));
    }, ()=>{
      this.comments=array;
      this.showMyComments= !this.showMyComments;
    }
  );
}
}