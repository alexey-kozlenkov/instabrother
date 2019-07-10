import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoPost } from './types/photo-post';

@Component({
  selector: 'ibr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: PhotoPost[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<PhotoPost[]>(
        `http://my-json-server.typicode.com/alexey-kozlenkov/instabrother/posts`
      )
      .subscribe(posts => (this.posts = posts));
  }
}
