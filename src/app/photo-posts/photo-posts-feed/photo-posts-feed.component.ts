import { Component, Input } from '@angular/core';
import { PhotoPost } from 'src/app/types';

@Component({
  selector: 'app-photo-posts-feed',
  templateUrl: './photo-posts-feed.component.html',
  styleUrls: ['./photo-posts-feed.component.scss']
})
export class PhotoPostsFeedComponent  {
  @Input() posts: PhotoPost[];
}
