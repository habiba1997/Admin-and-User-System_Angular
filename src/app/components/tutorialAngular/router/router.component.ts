import { ChangeDetectorRef } from '@angular/core';
import { ViewChild, AfterViewInit, Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements AfterViewInit {

  constructor( private cdr: ChangeDetectorRef)
  { }
  @ViewChild(ChildComponent) child;
  fromChild="lsa mgtsh";
  
  
  ngAfterViewInit(): void {
    this.fromChild= this.child.childMessageToParent;
    this.cdr.detectChanges();
  }

  childMessage="Message sent from parent to child";
  eventEmittedMessageByChild;

  receiveMessage($event) {
    this.eventEmittedMessageByChild = $event;
  }


}
