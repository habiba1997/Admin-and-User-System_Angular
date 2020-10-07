import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Album } from 'src/app/models/album/album';
import { NavigationService } from 'src/app/services/navigate/navigation.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(
    private http: HttpService,
    private navigate:NavigationService
  ) { }

  albums;

  ngOnInit(){
    let array = new Array<Album>();
    this.albums = new Array<Album>();
  
    this.http.getMyAlbums().subscribe(
      (album)=>{
        array.push(album);
      },
      (error)=>{
        window.alert("Error in getting your albums: "+ JSON.stringify(error));
      }, ()=>{
        this.albums=array;
      }
    );
  }
  goToImage(id)
  {
    this.navigate.navigateWithIDTo('/home/albums',id);
  }

}
