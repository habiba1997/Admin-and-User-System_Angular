import {CdkDragDrop, moveItemInArray, transferArrayItem} from
'@angular/cdk/drag-drop';

import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  constructor(
    private http: HttpService
  ) { }
  personaldetails;

  ngOnInit() {
    this.http.getUsers().subscribe((data) => {
    this.personaldetails = Array.from(Object.keys(data), k=>data[k]);
    });
    }
    
    onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex,
    event.currentIndex);
    } else {
    transferArrayItem(event.previousContainer.data,
    event.container.data,
    event.previousIndex,
    event.currentIndex);
    }
    }
}
