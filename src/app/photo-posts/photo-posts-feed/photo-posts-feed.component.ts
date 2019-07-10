import { Component, OnInit, Input } from '@angular/core';
import { PhotoPost } from 'src/app/types/photo-post';

@Component({
  selector: 'ibr-photo-posts-feed',
  templateUrl: './photo-posts-feed.component.html',
  styleUrls: ['./photo-posts-feed.component.scss']
})
export class PhotoPostsFeedComponent {
  @Input() posts: PhotoPost[];
}
