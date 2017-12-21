import { Component, OnInit, Input } from '@angular/core';

import { Post } from "../models/post";
import { User } from "../models/user";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Router, ActivatedRoute } from "@angular/router";

import { PostService } from "../services/post.service";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})

export class PostCardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private postService: PostService, private fb: FormBuilder, private userService: UserService) { 
  }

  commentForm: FormGroup;

  @Input() post: Post;
  private owner: User;

  ngOnInit() {
    this.buildForm();
    this.getOwnerDetails();
  }

  getComments(){
      this.postService.getPost(this.post.id).subscribe(data => {
        this.post = data;
      });
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

  getOwnerDetails() {
    this.userService.cacheLoaded$.subscribe(cacheLoaded => {
      if (cacheLoaded) {
        this.owner = this.userService.getUserInfo(this.post.owner.id);
      }
    }) 
  }

  goToOwner() {
    this.router.navigateByUrl("users/" + this.owner.id);
  }

}



