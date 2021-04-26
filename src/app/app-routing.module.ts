import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: '', redirectTo: 'tutorial', pathMatch: 'full' },
    { 
      path: 'sign', 
      loadChildren: () => import('./components/sign/sign.module').then(mod => mod.SignModule)
    },
    { 
      path: 'home', 
      loadChildren: () => import('./components/user-home-page/user-home-page.module').then( m => m.UserHomePageModule)
    },
    { 
      path: 'tutorial', 
      loadChildren: () => import('./components/tutorialAngular/tutorialAngular.module').then(mod => mod.TutorialAngularModule)
    },
    { path: '**', component: PageNotFoundComponent }, 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  
  ],
  exports: [RouterModule],
  providers: [],
  declarations:[PageNotFoundComponent]
})
export class AppRoutingModule { }

