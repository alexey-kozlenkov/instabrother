import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPostsFeedComponent } from './photo-posts-feed/photo-posts-feed.component';
import { PhotoPostComponent } from './photo-post/photo-post.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhotoPostsFeedComponent, PhotoPostComponent],
  exports: [PhotoPostsFeedComponent],
})
export class PhotoPostsModule { }
