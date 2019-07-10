import { Component, OnInit, Input } from '@angular/core';
import { PhotoPost } from 'src/app/types/photo-post';

@Component({
  selector: 'ibr-photo-post',
  templateUrl: './photo-post.component.html',
  styleUrls: ['./photo-post.component.scss']
})
export class PhotoPostComponent {
  @Input() post: PhotoPost;
}
