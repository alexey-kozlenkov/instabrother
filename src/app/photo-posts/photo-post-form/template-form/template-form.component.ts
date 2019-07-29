import { Component } from '@angular/core';
import { PhotoPost } from 'src/app/types';
import { PhotoPostsService } from '../../photo-posts.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['../photo-post-form.scss']
})
export class TemplateFormComponent {
  constructor(private postsService: PhotoPostsService) {}

  onSubmit(post: Partial<PhotoPost>) {
    this.postsService.addPhotoPost(post);
  }
}
