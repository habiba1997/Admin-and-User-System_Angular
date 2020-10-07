import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomePageModule } from './components/user-home-page/user-home-page.module';
import { SignModule } from './components/sign/sign.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { NavigationService } from './services/navigate/navigation.service';
import { AuthInterceptor } from './classes/Interceptors/httpInterceptor';
import { HttpService } from './services/http/http.service';
import { InteractionService } from './services/datacommunication/interaction.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserHomePageModule,
    SignModule,
    HttpClientModule
  ],
  providers: [,
    UserService,
    NavigationService,
    HttpService,
    InteractionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
