import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from '../signup/signup.component';
import { UserComponent } from '../user/user.component';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, UserComponent, MenuComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
