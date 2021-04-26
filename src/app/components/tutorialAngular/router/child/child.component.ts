import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

 
  @Input() parentMessage;
  boolean = false;

  childMessageToParent="This message is from child"

  
  @Output() messageEvent = new EventEmitter<Boolean>();

  constructor() { }

  sendMessage() {
    this.boolean=!this.boolean;
    this.messageEvent.emit(this.boolean);
  }

}
