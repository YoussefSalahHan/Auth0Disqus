import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';

import { DisqusModule } from "ngx-disqus";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    ProductComponent,
    ProfileComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    DisqusModule.forRoot('disqus_shortname'),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
