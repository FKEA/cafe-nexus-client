import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
         MatNativeDateModule } from "@angular/material";

import { Http, RequestOptions } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { UserService } from "./services/user.service";
import { AuthService } from "./services/auth.service";
import { PostService } from "./services/post.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from "./app-routing.module";
import { EventCardComponent } from './event-card/event-card.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateEventComponent } from './create-event/create-event.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventCardComponent,
    AllEventsComponent,
    AllPostsComponent,
    PostCardComponent,
    PostDetailComponent,
    EventDetailComponent,
    UserDetailComponent,
    LoginComponent,
    SignupComponent,
    CreateEventComponent
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
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    AuthService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
