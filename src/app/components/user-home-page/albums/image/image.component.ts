import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { ImageUrl } from 'src/app/models/album/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {


  constructor(
    private route: ActivatedRoute
    ,private http: HttpService) { }

  routeSub;
  images;

  ngOnInit() {
    let array = new Array<ImageUrl>();
    this.images = new Array<ImageUrl>();

    this.routeSub = this.route.params.subscribe(params => {

      this.http.getMyImages(params['id']).subscribe(
        (image)=>{
          array.push(image);

        },
        (error)=>{
          window.alert("Error in getting your images: "+ JSON.stringify(error));
        }, ()=>{
          console.log("images came succesfully");
          this.images=array;
        }
      );
  
    });
  }
}
