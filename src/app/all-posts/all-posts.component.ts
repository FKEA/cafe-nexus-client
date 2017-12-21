import { Component, OnInit } from '@angular/core';

import { PostService } from "../services/post.service";

import { Post } from "../models/post";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private postSvc: PostService, private route: ActivatedRoute) { 
    this.route.params.subscribe(() => {
      this.getPosts();
    });
  }

  posts: Post[];

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postSvc.getPosts().subscribe(data => {
      this.posts = data;
    });

  }

}


