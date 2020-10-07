
export class Post {
    userId: number;
    id:number;
    title: string;
      body: string;

      mycomments;

    constructor(
        userId?: number,
        id?:number,
        title?: string,
          body?: string,

    ) {    
      this.userId=userId;
      this.id=id;
      this.title=title;
      this.body=body;

  } 

  setComments(comments)
  {
    this.mycomments=comments;
  }

getComments()
{
  return this.mycomments;
}
    

  }
  