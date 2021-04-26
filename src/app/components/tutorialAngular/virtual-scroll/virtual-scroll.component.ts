import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  constructor(
    private http: HttpService) { }
  
  public albumdetails;

    ngOnInit(): void {

      this.http.getAllPhotos().subscribe((data) => {
        this.albumdetails = Array.from(Object.keys(data), k=>data[k]);
        }); 
      
    }

}
