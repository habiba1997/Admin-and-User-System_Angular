export class Comment {
    postId:number;
    id: number;
    name:string;
    email:string;
    body:string;

    constructor(
        postId?:number,
    id?: number,
    name?:string,
    email?:string,
    body?:string,
    ) {    
      this.postId=postId;
      this.email=email;
      this.body=body;
      this.id=id;
      this.name=name;
  } 


  }
  