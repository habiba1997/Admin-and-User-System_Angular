import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialAngularComponent } from './tutorialAngular.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeTextDirective } from 'src/app/directives/changeText/change-text.directive';
import LogOnClickDirective from 'src/app/directives/logOnClick/log-on-click.directive';
import { ChangeBackgroundColorDirective } from 'src/app/directives/changeBackgroundColor/change-background-color.directive';
import { AddBorderBindingDirective } from 'src/app/directives/addBorderBinding/add-border-binding.directive';
import { SqrtPipe } from 'src/app/classes/pipes/sqrt';
import { RouterComponent } from './router/router.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { ChildComponent } from './router/child/child.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AnimationComponent } from './animation/animation.component';
import { MatButtonModule } from '@angular/material/button'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularMaterialComponent } from './angular-material/angular-material.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialAngularComponent
  }, 
  {
    path: 'router',
    component: RouterComponent
  },
  //template need FormsModule
  {
    path: 'template',
    component: TemplateFormComponent
  },
  // model need reactive form module
  {
    path: 'model',
    component: ModelFormComponent
  },    
  {
    path: 'scroll',
    component: VirtualScrollComponent
  },  
  {
    path:'drag',
    component: DragAndDropComponent
  },
  {
    path:"animation",
    component: AnimationComponent
  },
  {
    path:'material',
    component: AngularMaterialComponent
  }
];

@NgModule({
  
  declarations: [
    TutorialAngularComponent,
    ChangeTextDirective,
    LogOnClickDirective,
    ChangeBackgroundColorDirective,
    AddBorderBindingDirective,
    SqrtPipe,
    RouterComponent,
    TemplateFormComponent,
    ModelFormComponent,
    ChildComponent, 
    VirtualScrollComponent, 
    DragAndDropComponent, 
    AnimationComponent, 
    AngularMaterialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,    
    DragDropModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule, 
    MatInputModule, 
    MatNativeDateModule,
    RouterModule.forChild(routes)

  ],
  bootstrap: [TutorialAngularComponent]
})
export class TutorialAngularModule { }
