import { Component } from '@angular/core';
import { PhotoPost } from './types';
import { HttpClient } from '@angular/common/http';

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
}
