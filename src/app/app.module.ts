import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {provideState, provideStore} from "@ngrx/store";
import {postReducer} from "./state/post/post.reducer";
import {authReducer} from "./state/auth/auth.reducer";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgOptimizedImage,
        // StoreModule.forRoot({ postSlice: postReducer })
    ],
  providers: [
    provideStore(),
    provideState({name:"post",reducer:postReducer}),
    provideState({name:"auth",reducer:authReducer}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
