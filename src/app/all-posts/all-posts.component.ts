import { Component, OnInit } from '@angular/core';

import { PostService } from "../services/post.service";

import { Post } from "../models/post";

import { EventCardComponent } from "../event-card/event-card.component";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private postSvc: PostService) { }

  private posts: Post[];

  ngOnInit() {

    this.getPosts();

  }

  getPosts() {
    this.postSvc.getPosts().subscribe(
      posts => this.posts = posts
    );
  }

}


