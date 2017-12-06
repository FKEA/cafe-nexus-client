import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Location } from "@angular/common";

import { Post } from "../models/post";

import { AuthService } from "../services/auth.service";
import { PostService } from "../services/post.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private authService: AuthService, private postService: PostService, private fb: FormBuilder, private location: Location) { }

  postForm: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  goBack() {
    this.location.back();
  }

  buildForm() {
    this.postForm = this.fb.group({
      owner: this.authService.id,
      content: ['', Validators.required]
    })
  }

  createPost() {
    this.postService.createPost(this.postForm.value).subscribe(() => {
      this.postService.getPosts();
      this.location.back();
    });
  }

}
