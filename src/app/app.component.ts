import { Component } from '@angular/core';
import { PhotoPost } from './types';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photoPosts: PhotoPost[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<PhotoPost[]>(
        'http://my-json-server.typicode.com/alexey-kozlenkov/instabrother/posts'
      )
      .subscribe(posts => (this.photoPosts = posts));
  }

  onAddPost(newPost: Partial<PhotoPost>) {
    const body = {
      ...newPost,
      id: Date.now(),
      createdAt: Date.now()
    };

    this.httpClient
      .post<PhotoPost>(
        'http://my-json-server.typicode.com/alexey-kozlenkov/instabrother/posts',
        body
      )
      .subscribe(post => (this.photoPosts = [post, ...this.photoPosts]));
  }
}
