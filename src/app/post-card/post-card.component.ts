import { Component, OnInit, Input } from '@angular/core';

import { Post } from "../models/post";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

import { PostService } from "../services/post.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})

export class PostCardComponent implements OnInit {

  constructor(private authService: AuthService, private postService: PostService, private fb: FormBuilder) { }

  commentForm: FormGroup;

  @Input() post: Post;

  ngOnInit() {
    this.buildForm();
  }

  getComments(){
    if (this.post.comments.length === 0) {
      this.postService.getPost(this.post.id).subscribe(data => this.post = data);
    }
  }

  buildForm() {
    this.commentForm = this.fb.group({
      owner: this.authService.id,
      content: '',
      parent: this.post.id
    })
  }

  createComment() {
    this.postService.createPost(this.commentForm.value).subscribe(() => {
      this.getComments();
      this.commentForm.reset();
    });
  }

}



