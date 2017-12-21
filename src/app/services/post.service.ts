import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { Post } from "../models/post";



@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  private postUrl = "http://localhost:8080/api/posts";

  posts: Post[]
  posts$ = new BehaviorSubject<Post[]>(this.posts);

  getPosts(): Observable<Post[]> {

    return this.http.get<Post[]>(this.postUrl);

  }

  getPost(id: number): Observable<Post> {
    const url  = this.postUrl + '/' + id;
    return this.http.get<Post>(url);
  }

  createPost(post: Post): Observable<any> {
    return this.http.post(this.postUrl, post, {responseType: 'text'});
  }

}
