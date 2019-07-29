import { Component } from '@angular/core';
import { PhotoPost } from 'src/app/types';
import { PhotoPostsService } from '../photo-posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-posts-feed',
  templateUrl: './photo-posts-feed.component.html',
  styleUrls: ['./photo-posts-feed.component.scss']
})
export class PhotoPostsFeedComponent {
  posts: Observable<PhotoPost[]>;

  constructor(private postsService: PhotoPostsService) {
    this.posts = this.postsService.getPhotoPosts();
  }
}
