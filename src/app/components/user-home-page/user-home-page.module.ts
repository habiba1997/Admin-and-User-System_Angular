import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserHomePageComponent } from './user-home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlbumsComponent } from './albums/albums.component';
import { PostsComponent } from './posts/posts.component';
import { ImageComponent } from './albums/image/image.component';
import { AdminDashBoardComponent } from '../admin-dash-board/admin-dash-board.component';
import { AdminLoggedInGaurd } from 'src/app/classes/Gaurds/adminGaurd';
import { OnlyLoggedInUserGaurd } from 'src/app/classes/Gaurds/userGaurd';
import { AdminHttpService } from 'src/app/services/httpAdmin/admin-http.service';
import { CommentComponent } from './posts/comment/comment.component';

const routes: Routes = [
  {
    path: '',
    component: UserHomePageComponent,
    canActivate: [OnlyLoggedInUserGaurd]


  },
  {
    path:'home',
    component:UserHomePageComponent,
    canActivate: [OnlyLoggedInUserGaurd]

  }, 
  {
    path:'albums',
    component:AlbumsComponent,
    canActivate: [OnlyLoggedInUserGaurd]


  },
  {
    path:'albums/:id',
    component:ImageComponent,
    canActivate: [OnlyLoggedInUserGaurd]


  },
  {
    path:'posts',
    component:PostsComponent,
    canActivate: [OnlyLoggedInUserGaurd]


  },
  {
    path:'posts/:id/comments',
    component:CommentComponent,
    canActivate: [OnlyLoggedInUserGaurd]


  },
  {
    path:'dashboard',
    component: AdminDashBoardComponent,
    canActivate: [OnlyLoggedInUserGaurd, AdminLoggedInGaurd]
  }
  // { path: '**', component: PageNotFoundComponent }, 

];

@NgModule({
  imports: [
  CommonModule,
  FormsModule,
  RouterModule.forChild(routes)
],
providers: [
OnlyLoggedInUserGaurd,
AdminLoggedInGaurd,
AdminHttpService,

],
declarations: [
  UserHomePageComponent,
  NavbarComponent,
  AlbumsComponent,
  PostsComponent,
  ImageComponent,
  AdminDashBoardComponent,
  CommentComponent
],
// exports:[AlbumsComponent]
})
export class UserHomePageModule { }
