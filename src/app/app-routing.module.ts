import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuardService } from "./auth-guard.service";

import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { UserDetailComponent   } from "./user-detail/user-detail.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { AllEventsComponent } from "./all-events/all-events.component";
import { AllPostsComponent } from "./all-posts/all-posts.component";

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent, 
    data: {title: ''}
  },
  { 
    path: 'signup', 
    component: SignupComponent, 
    data: {title: ''}
  },
  { 
    path: 'create-event', 
    component: CreateEventComponent, 
    data: {title: 'Create an event'},
    canActivate: [AuthGuardService],
  },
  { 
    path: 'create-post', 
    component: CreatePostComponent, 
    data: {title: 'Create a post'},
    canActivate: [AuthGuardService],
  },
  { 
    path: 'users/:id', 
    component: UserDetailComponent, 
    data: {title: 'User Information'},
    canActivate: [AuthGuardService],
  },
  { 
    path: 'events/:id', 
    component: EventDetailComponent, 
    data: {title: 'Event Information'},
    canActivate: [AuthGuardService],
  },
  { 
    path: 'events', 
    component: AllEventsComponent, 
    data: {title: 'Events'},
    canActivate: [AuthGuardService],
  },
  { 
    path: 'posts', 
    component: AllPostsComponent, 
    data: {title: 'Posts'},
    canActivate: [AuthGuardService],
  },
  { 
    path: '', 
    redirectTo: '/posts', 
    pathMatch: 'full' 
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
