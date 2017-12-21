import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { FlexLayoutModule } from "@angular/flex-layout";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule,
         MatToolbarModule,
         MatButtonToggleModule,
         MatMenuModule,
         MatIconModule,
         MatCardModule,
         MatExpansionModule,
         MatTabsModule,
         MatInputModule,
         MatRadioModule,
         MatSelectModule,
         MatDialogModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatListModule } from "@angular/material";

import { Http, RequestOptions } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { UserService } from "./services/user.service";
import { AuthService } from "./services/auth.service";
import { PostService } from "./services/post.service";
import { EventService } from "./services/event.service";
import { AuthGuardService } from "./auth-guard.service";
import { AuthInterceptorService } from "./auth-interceptor.service";

import { AppComponent } from './app.component';

import { AppRoutingModule } from "./app-routing.module";
import { AllEventsComponent } from './all-events/all-events.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  declarations: [
    AppComponent,
    AllEventsComponent,
    AllPostsComponent,
    PostCardComponent,
    EventDetailComponent,
    PostDetailComponent,
    UserDetailComponent,
    LoginComponent,
    SignupComponent,
    CreateEventComponent,
    CreatePostComponent
  ],
  imports: [
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  },
    UserService,
    AuthService,
    PostService,
    EventService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
