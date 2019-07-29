import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { PhotoPost } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PhotoPostsService {
  private posts: BehaviorSubject<PhotoPost[]> = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient
      .get<PhotoPost[]>(
        'http://my-json-server.typicode.com/alexey-kozlenkov/instabrother/posts'
      )
      .subscribe(posts => this.posts.next(posts));
  }

  getPhotoPosts() {
    return this.posts.asObservable();
  }

  addPhotoPost(post: Partial<PhotoPost>) {
    const timestamp = Date.now();
    const body = {
      ...post,
      id: timestamp,
      createdAt: timestamp
    };

    this.httpClient
      .post<PhotoPost>(
        'http://my-json-server.typicode.com/alexey-kozlenkov/instabrother/posts',
        body
      )
      .pipe(
        withLatestFrom(this.getPhotoPosts()),
        map(([newPost, oldPosts]) => [newPost, ...oldPosts])
      )
      .subscribe(posts => {
        this.posts.next(posts);
        this.router.navigateByUrl('/list');
      });
  }
}
