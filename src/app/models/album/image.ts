export class ImageUrl {
    albumId:number;
    id: number;
    title:string;
    url:string;
    thumbnailUrl:string;

    constructor(
        albumId?:number,
    id?: number,
    title?:string,
    url?:string,
    thumbnailUrl?:string,
    ) {    
      this.albumId=albumId;
      this.url=url;
      this.title=title;
      this.id=id;
      this.thumbnailUrl=thumbnailUrl;
  } 


  }
