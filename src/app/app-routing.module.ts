import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', 
      // loadChildren: './components/sign/sign.module#SignModule' 
      loadChildren: () => import('./components/sign/sign.module').then(mod => mod.SignModule)

    },

   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

