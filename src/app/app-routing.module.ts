import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserService } from './services/user/user.service';
import { HttpService } from './services/http/http.service';
import { NavigationService } from './services/navigate/navigation.service';


const routes: Routes = [
    { path: '', redirectTo: 'sign', pathMatch: 'full' },
    { 
      path: 'sign', 
      loadChildren: () => import('./components/sign/sign.module').then(mod => mod.SignModule)
    },
    { 
      path: 'home', 
      loadChildren: () => import('./components/user-home-page/user-home-page.module').then( m => m.UserHomePageModule)
    },
    { path: '**', component: PageNotFoundComponent }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    UserService,
    NavigationService
  ],
  declarations:[PageNotFoundComponent]
})
export class AppRoutingModule { }

