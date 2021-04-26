import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from
'@angular/animations';

// Trigger defines the start of the animation. The first param to it is the name of the animation
// to be given to the html tag to which the animation needs to be applied. The second param
// are the functions we have imported - state, transition, etc.

// The state function involves the animation steps, which the element will transition between.
// Right now we have defined two states, smaller and larger. For smaller state, we have
// given the style transform:translateY(100px) and transform:translateY(100px).

// Transition function adds animation to the html element. The first argument takes the start
// and end states, the second argument accepts the animate function allows you 
//to define the length, delay, and ease of a transition.

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
      trigger('myanimation',[
        state('smaller',style(
          {
            transform : 'translateY(100px)'
          }
        )),
        state('larger',style(
          {
            transform : 'translateY(0px)'
          })),
        transition('smaller <=> larger',animate('300ms ease-in'))
      ])
    ]
})
export class AnimationComponent {

  state: string = "smaller";
  animate() {
    this.state= this.state == 'larger' ? 'smaller' : 'larger';
  }

}
