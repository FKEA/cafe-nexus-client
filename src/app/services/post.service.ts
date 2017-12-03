import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { Post } from "../models/post";

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  private postUrl = "http://localhost:8080/api/posts";

  posts: Post[];

  getPosts(): Observable<Post[]> {

    return this.http.get<Post[]>(this.postUrl);

  }

}
